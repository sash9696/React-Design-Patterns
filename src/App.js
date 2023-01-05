import React from 'react'
import './App.css'
import Singleton from './components/Singleton'
import AnotherSingleton from './components/AnotherSingleton'

function App() {
  return (
	<div className='app'>
    <Singleton/>
    <AnotherSingleton/>
  </div>

  )
}

export default App