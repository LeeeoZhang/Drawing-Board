import React from 'react'
import './Board.css'

import Menu from '../Menu'
import DrawingArea from '../DrawingArea'

const Board: React.FC = () => {
  return (
    <div className="board">
      <Menu/>
      <DrawingArea/>
    </div>
  )
}

export default Board