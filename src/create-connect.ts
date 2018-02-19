import * as React from 'react'
import { IOptions } from './types'

function createConnect({ name, context }: IOptions) {
  return wrappedComponent => {
    class Connect extends React.Component {
      public render() {
        return React.createElement(wrappedComponent, {
          ...this.context,
          ...this.props
        })
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
