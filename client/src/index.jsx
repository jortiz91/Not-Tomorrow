import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { WorkoutsContextProvider } from './context/WorkoutsContext'
import { AuthContextProvider } from './context/AuthContext'
import { NutritionsContextProvider } from './context/NutritionsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <NutritionsContextProvider>
          <App />
        </NutritionsContextProvider>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
