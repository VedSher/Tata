import React from 'react'
import Button from '../Button'

function Tile1() {
  return (
    <div className="h-100 w-60 px-3 rounded-lg bg-amber-200 flex-wrap">
        <img src="/icons/youtube.png" alt="youtube" className="h-30 w-auto px-5 pt-6"/>
        <Button url="https://www.youtube.com" siteName="Youtube" />
        <p className='mt-1 text-lg '>YouTube is a video-sharing platform for creating and viewing content.</p> 
    </div>
  )
}

export default Tile1