// @flow

import React from 'react';

function wrap<Props: Object>(Component: Class<React.Component<void, Props, void>>): Class<React.Component<void, Props, void>> {
  return class MyComponent extends React.Component {
    props: Props;

    render() {
      return <Component {...this.props}/>;
    }
  }
}

class Hello extends React.Component {
  props: {
    target: string,
  };

  render() {
    return <h1>Hello {this.props.target}!</h1>;
  }
}

let WrappedHello = wrap(Hello);
let test = <WrappedHello target={42}/>;
