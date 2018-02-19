import { Children, Component, createElement } from 'react'
import { IOptions } from './types'

function createProvider({ name, context }: IOptions) {
  class Provider extends Component {
    public getChildContext() {
      const ctx = {}
      for (const key in context) {
        if (context.hasOwnProperty(key)) {
          ctx[key] = this.props[key]
        }
      }
      return ctx
    }
    public render() {
      return Children.only(this.props.children)
    }
  }
  // @ts-ignore
  Provider.displayName = name || 'Provider'
  // @ts-ignore
  Provider.childContextTypes = context
  return Provider
}

export { createProvider }
