import React, { Component } from 'react';
interface State {
   value: string,
};

class MyComponent extends Component<{}, State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      value: "rikkei academy"
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      value: "rikkeiSoft"
    }));
  };

  render() {
    return (
      <div>
        <p>Giá trị của state: {this.state.value}</p>
        <button onClick={this.handleClick}>Click để thay đổi giá trị</button>
      </div>
    );
  }
}

export default MyComponent;
