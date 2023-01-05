import React from 'react'
import singletonUser from '../patterns/singleton'

function AnotherSingleton() {
    const name = singletonUser.getUserName()
  return (
    <div style={{width: 200, height:200, backgroundColor: 'lightgrey'}}>
        <h1>{name}</h1>
        <button onClick={() =>{ 
            singletonUser.setUserName('peter')
            console.log(singletonUser.getUserName())
            }} >Set Name</button>

    </div>
  )
}

export default AnotherSingleton