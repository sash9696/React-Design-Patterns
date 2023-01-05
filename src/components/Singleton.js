import React from 'react'
import singletonUser from '../patterns/singleton'


function Singleton() {
   const name = singletonUser.getUserName()

  return (

    <div style={{width: 200, height:200, backgroundColor: 'aliceblue'}}>
        <h1>{name}</h1>
        <button onClick={() => singletonUser.getUserName()} >Get Name</button>

    </div>
  )
}

export default Singleton