# react-color
> Color picker for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-color
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | string | false    | -       | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |
| items     | array  | false    | []      | The color list.                       |
| template  | func   | false    | -       | Render item template.                 |


## usage
1. import css
  ```scss
  @import "~@jswork/react-color/dist/style.css";

  // or use sass
  @import "~@jswork/react-color/dist/style.scss";

  // customize your styles:
  $react-color-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactColor from '@jswork/react-color';
  import './assets/style.scss';

  class App extends React.Component {
    constructor(inProps) {
      super(inProps);
      this.state = {
        value: '#FCB900',
        items: [
          { value: '#FF6900' },
          { value: '#FCB900' },
          { value: '#7BDCB5' },
          { value: '#00D084' },
          { value: '#8ED1FC' },
          { value: '#0693E3' },
          { value: '#ABB8C3' },
          { value: '#EB144C' },
          { value: '#F78DA7' },
          { value: '#9900EF' }
        ]
      };
    }

    _onChange = (e) => {
      const { value } = e.target;
      console.log('value:', value);
      this.setState({ value });
    };

    render() {
      const { items, value } = this.state;
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-color">
          <ReactColor items={items} value={value} onChange={this._onChange} />
          <div className="color-show" style={{ background: value }}>
            {value}
          </div>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-color/


## license
Code released under [the MIT license](https://github.com/afeiship/react-color/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-color
[version-url]: https://npmjs.org/package/@jswork/react-color

[license-image]: https://img.shields.io/npm/l/@jswork/react-color
[license-url]: https://github.com/afeiship/react-color/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-color
[size-url]: https://github.com/afeiship/react-color/blob/master/dist/react-color.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-color
[download-url]: https://www.npmjs.com/package/@jswork/react-color
