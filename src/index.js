// Node modules
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

//CSS link
import './index.css'
import 'lenis/dist/lenis.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)