import '@fontsource/poppins'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'

import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import { Provider } from 'react-redux'
import { store } from './app/Store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
