import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import _isFunction from 'lodash/isFunction';
import _isString from 'lodash/isString';
import _get from 'lodash/get';

class LoaderComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    this.setState({error: null});
    Promise.resolve(true)
      .then(this.props.loader)
      .catch((error) => this.setState({error}));
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    if (this.state.error) {
      return (
        <div className="text-center">
          <h5>{this.props.errorFormatter(this.state.error)}</h5>

          <br />

          <button className="btn btn-action" onClick={this.loadData}>
            Try Again
          </button>
        </div>
      );
    }

    return <div className="loader-indicator" />
  }
}

// `convertProps` is passed with props of WrappedComponent and should return object
// with two keys: `loader` and `isLoaded`
const withData = (convertProps, formatError) => (WrappedComponent) => {
  const WithData = (props) => {
    const { loader, isLoaded } = convertProps(props);
    if (!_isFunction(loader)) {
      return <h1>Please return function for loader key in convertProps</h1>
    }

    // Allow passing plain string as second argument for error messages
    if (_isString(formatError)) {
      formatError = () => formatError;
    }

    const errorFormatter = formatError || ((error) => {
      // attempt to server error reason, then fallback to error.message
      const failReason = _get(error, 'response.data.error') || error.message;
      return "Loading failed with: " + failReason;
    });

    if (isLoaded) {
      return <WrappedComponent { ...props } />;
    }

    return <LoaderComponent loader={loader} errorFormatter={errorFormatter} />
  }
  const dn = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithData.displayName = `WithData(${dn})`;
  return hoistNonReactStatic(WithData, WrappedComponent);
}

export default withData;
