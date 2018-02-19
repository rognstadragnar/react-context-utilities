import * as React from 'react'

function createConnect({ name, context }) {
  return wrappedComponent => {
    class Connect extends React.Component {
      public render() {
        const { tracker } = this.context
        return React.createElement(wrappedComponent, { tracker, ...this.props })
      }
    }
    // @ts-ignore
    Connect.contextTypes = context
    // @ts-ignore
    Connect.displayName = `connect(${wrappedComponent.displayName ||
      wrappedComponent.name ||
      'Component'})`
    return Connect
  }
}

export { createConnect }
