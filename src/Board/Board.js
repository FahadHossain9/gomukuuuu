import React from 'react'
import BoardRow from './BoardRow'
import './Board.css'
import TextArea from './TextArea'
function board() {
  
  return (
    <div className='board'>
        
        <BoardRow />
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
        <BoardRow/>
    </div>
  )
}

export default board;