import { ArrowBackOutlined } from '@mui/icons-material'
import './Watch.scss'
import React from 'react'

const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <iframe src="https://www.youtube.com/embed/2wxLpLBJ2fE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Watch