import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>  {/* Replace with your store */}  {/* Example: import { store } from './store' */}  {/* Replace with your App component */}  {/* Example: import App from './App' */}  </Provider>
    <App />
  </StrictMode>,
)
