import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-color';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop,
    template: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    const { value } = inProps;
    super(inProps);
    this.itemTemplate = this.itemTemplate.bind(this);
    this.state = {
      value
    };
  }

  componentWillReceiveProps(inNextProps) {
    const { value } = inNextProps;
    const _value = this.state.value;
    if (value !== _value) {
      this.change(value);
    }
  }

  change(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }
  itemTemplate(inItem, inIndex) {
    const { value } = this.state;
    return (
      <span
        onClick={this._onClick}
        data-color={inItem.value}
        className={classNames(`${CLASS_NAME}__item`, {
          'is-active': inItem.value === value
        })}
        style={{ background: inItem.value }}
        key={inItem.value}
      />
    );
  }

  _onClick = (inEvent) => {
    const { color } = inEvent.target.dataset;
    this.change(color);
  };

  render() {
    const {
      className,
      items,
      value,
      template,
      onChange,
      ...props
    } = this.props;
    const itemTemplate = template === noop ? this.itemTemplate : template;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {items.length > 0 &&
          items.map((item, index) => {
            return itemTemplate(item, index);
          })}
      </div>
    );
  }
}
