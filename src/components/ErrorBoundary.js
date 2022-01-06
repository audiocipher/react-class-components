import { Component } from 'react';

// An "Error Boundary component" is any component that implements the componentDidCatch() life-cycle method
// Error Boundary components must be class-based components
// Wrap this ErrorBoundary component around any components that can throw errors for which we want this component to handle
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // executes whenever one of its child components throws an error
  componentDidCatch(error) {
    console.log(`inside componentDidCatch: ${error}`);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
