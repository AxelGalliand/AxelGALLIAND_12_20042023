import { useState } from 'react'
import './App.css'
import { Header } from './Component/Header'
import { Page } from './Component/Pages/Profil'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Page/>
    </div>
  )
}

export default App
