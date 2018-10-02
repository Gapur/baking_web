import React, { Component } from 'react';

export default class Overlay extends Component {

  componentDidMount() {
    document.documentElement.classList.add("is-clipped");
  }

  componentWillUnmount() {
    document.documentElement.classList.remove("is-clipped");
  }

  render() {
    return (
      <div className="is-overlay overlay">
        {this.props.children}
      </div>
    );
  }
}
