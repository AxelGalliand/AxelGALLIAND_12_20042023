import './App.css'
import { Header } from './Component/Header'
import { Routeur } from './Component/Routes'

/**
 * function to create the main content
 * @returns {function} export this function to main.jsx
 */
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routeur/>
    </div>
  )
}

export default App