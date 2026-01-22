import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import './styles.css'

const rootElement = document.querySelector('#root')

if(rootElement) {
  const root = createRoot(rootElement)

  root.render(
    <BrowserRouter >
      <App />
    </ BrowserRouter>
  )
} else {
  throw new Error('Se necesita un punto de entrada')
}