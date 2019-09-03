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
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    const { value } = inProps;
    super(inProps);
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
    const _value = this.state.value;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {items.length > 0 &&
          items.map((item) => {
            return (
              <span
                onClick={this._onClick}
                data-color={item.value}
                className={classNames(`${CLASS_NAME}__item`, {
                  'is-active': item.value === _value
                })}
                style={{ background: item.value }}
                key={item.value}></span>
            );
          })}
      </div>
    );
  }
}
