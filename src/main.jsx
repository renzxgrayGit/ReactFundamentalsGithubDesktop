import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Sample1 from './Sample1.jsx'
import UseState from './UseState.jsx'
import Count from './Count.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Sample1 />
    <UseState />
    <Count />
  </React.StrictMode>,
)
