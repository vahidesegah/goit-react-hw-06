// Styles İmport
import './assets/css/reset.css'
import './assets/css/index.css'
import 'modern-normalize/modern-normalize.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './components/App/App.jsx'
import store from './redux/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>,
)
