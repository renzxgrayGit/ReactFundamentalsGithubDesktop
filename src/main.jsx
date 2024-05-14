import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToggleLoginSample from './ToggleLoginSample.jsx'
import ComponentProps from './ComponentProps.jsx'
import AddMinusOne from './AddMinusOne.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToggleLoginSample />
    <ComponentProps />
    <AddMinusOne />
  </React.StrictMode>,
)
