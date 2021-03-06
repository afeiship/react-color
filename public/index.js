import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactColor from '../src/main';
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
