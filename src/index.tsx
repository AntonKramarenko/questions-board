import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'
import store from './store/index'

// const storea = createStore(store)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
    <Provider store={store}>
    <BrowserRouter >
				<App />
		</BrowserRouter>
    </Provider>
	</React.StrictMode>
)
