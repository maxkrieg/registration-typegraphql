import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const API_SERVER_URI = process.env.REACT_APP_API_SERVER_URI

const renderApp = () => {
  const client = new ApolloClient({
    uri: API_SERVER_URI,
    credentials: 'include',
    fetchOptions: {
      credentials: 'include',
      fetchOptions: {
        mode: 'no-cors',
      },
    },
    resolvers: {},
  })
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'),
  )
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
