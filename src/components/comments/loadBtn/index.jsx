import React from 'react'
import { Link } from 'react-router-dom'

const LoadCommentsBtn = () => {
  return (
    <div className="centered">
      <Link className='btn' to='comments'>Load Comments</Link>
    </div>
  )
}

export default LoadCommentsBtn