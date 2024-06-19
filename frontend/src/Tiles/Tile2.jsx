import React from 'react'
import Button from '../Button'

function Tile2() {
  return (
    <div className="h-100 w-60 px-3 rounded-lg bg-amber-200 flex-wrap">
        <img src="/icons/facebook.png" alt="facebook" className="h-30 w-auto px-5 pt-6"/>
        <Button url="https://www.facebook.com" siteName="Facebook" />
        <p className='mt-1 text-lg '>Facebook is a social networking site for connecting and sharing online.</p> 
    </div>
  )
}

export default Tile2