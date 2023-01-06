import React from 'react'
import './App.css'
import Singleton from './components/Singleton'
import AnotherSingleton from './components/AnotherSingleton'
import ProxyPattern from './patterns/proxy'

function App() {

 
  return (
	<div className='app'>
    {/* <Singleton/>
    <AnotherSingleton/> */}
    <ProxyPattern/>
  </div>

  )
}

export default App