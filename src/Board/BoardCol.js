import React from 'react'
import './BoardCol.css'
import RedBall from './RedBall'
import BlueBall from './BlueBall'
function boardCol() {
  
  let color = null;
  const changecolor=()=>{

  }
  return (
    <div className='cell' onClick={changecolor()}>  
     {color==='red' && <RedBall/>}
     {color==='blue' && <BlueBall/>}
    </div>
  )

}

export default boardCol