import React from 'react'
import BoardCol from './BoardCol'
import './BoardRow.css'
function boardRow() {
  return (
    <div className='Row'>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
    </div>
  )
}

export default boardRow