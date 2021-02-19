import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactList from '@jswork/react-list';

const CLASS_NAME = 'react-color';
const DEFAULT_TEMPLATE = ({ item, isActive, onChange }) => {
  return (
    <span
      onClick={onChange}
      data-value={item.value}
      className={classNames(`${CLASS_NAME}__item`, {
        'is-active': isActive()
      })}
      style={{ background: item.value }}
      key={item.value}
    />
  );
};

export default class ReactColor extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The color list.
     */
    items: PropTypes.array,
    /**
     * Render item template.
     */
    template: PropTypes.func
  };

  static defaultProps = {
    items: [],
    onChange: noop,
    template: DEFAULT_TEMPLATE
  };

  constructor(inProps) {
    const { value } = inProps;
    super(inProps);
    this.state = {
      value
    };
  }

  shouldComponentUpdate(inNextProps) {
    const { value } = inNextProps;
    const _value = this.state.value;
    if (value !== _value) {
      this.change(value);
    }
    return true;
  }

  change(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  handleTemplate = ({ item, index }) => {
    const { template } = this.props;
    const { value } = this.state;
    const isActive = () => {
      return value === item.value;
    };
    return template({ item, index, isActive, onChange: this.handleClick });
  };

  handleClick = (inEvent) => {
    const { value } = inEvent.target.dataset;
    this.change(value);
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

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <ReactList virtual items={items} template={this.handleTemplate} />
      </div>
    );
  }
}
