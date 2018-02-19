# React-create-context

## Motivation

Eventhough `context` in React should be used sparingly, there are very real use cases where `context` makes sense.

The `react-redux` pattern with a `Provider`-`connect` relationship is clean and something people are familiar with – even if they have never heard of `context` in `React`.

Setting up `Providers` and `connect` functions can be a bit foreign. More so than I think it has to be. Enter `React-create-context`.

## Usage

### Initializing

Both creating a `provider` and a `connect` function is straight-forward.

`createProvider` expects an object with a valid `contextType` ([documentation](https://reactjs.org/docs/context.html)).

```Javascript
import { createProvider, createConnect } from 'react-create-context'
import PropTypes from 'prop-types'

const trackingContext = {
  tracker: PropTypes.func
}

const TrackerProvider = createProvider({
  name: 'TrackerProvider',
  context: trackingContext
})

const withTracker = createConnect({
  name: 'withTracker',
  context: trackingContext
})

export { TrackerProvider, withTracker }
```

### Consuming

```Javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { TrackerProvider, withTracker } from './somewhere'

const Button = ({ tracker }) => {
  return (
    <button onClick={tracker}>
      Track me
    </button>
  )
}

const App = withTracker(Button)

ReactDOM.render(
  <TrackerProvider tracker={console.log}>
      <App />
  </TrackerProvider>,
  document.getElementById('root')
)
```

## License

[MIT](LICENSE).
