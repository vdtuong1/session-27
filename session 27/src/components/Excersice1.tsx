import React, { Component } from 'react';

interface State {
  name: string,
};
class Excersice1 extends Component<{}, State> {
  constructor(props:{}) {
    super(props);
    this.state = {
      name: 'Vu Doan Truong',
    };
  }

  render() {
    return (
      <div>
        <h1>Ho va ten: {this.state.name}</h1>
      </div>
    );
  }
}

export default Excersice1;
