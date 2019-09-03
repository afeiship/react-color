# react-color
> Color picker for react.

## install
```shell
npm install -S afeiship/react-color
```

## usage
1. import css
  ```scss
  @import "~react-color/style.scss";

  // customize your styles:
  $react-color-options: ()
  ```
2. import js
  ```js
  import ReactColor from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    constructor(inProps) {
      super(inProps);
      this.state = {
        value: '#FCB900',
        items: [
          {
            value: '#FF6900'
          },
          {
            value: '#FCB900'
          },
          {
            value: '#7BDCB5'
          },
          {
            value: '#00D084'
          },
          {
            value: '#8ED1FC'
          },
          {
            value: '#0693E3'
          },
          {
            value: '#ABB8C3'
          },
          {
            value: '#EB144C'
          },
          {
            value: '#F78DA7'
          },
          {
            value: '#9900EF'
          }
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
        <div className="app-container">
          <h1>React-Color</h1>
          <ReactColor items={items} value={value} onChange={this._onChange} />
          <div className="color-show" style={{ background: value }}>
            {value}
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-color/

## resouces
- http://casesandberg.github.io/react-color/
