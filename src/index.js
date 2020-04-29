import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import App from './App'
import './styles.css'
import DefaulErrorBoundary from './DefaultErrorBoundary'

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(
  <React.StrictMode>
    <DefaulErrorBoundary>
      <App />
    </DefaulErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
