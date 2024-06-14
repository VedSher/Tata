import React from 'react'
import Button from '../Button'

function Tile3() {
  return (
    <div className="h-100 w-60 px-3 rounded-lg bg-amber-200 flex-wrap">
        <img src="/icons/Instagram.jpeg" alt="insta" className="h-30 w-auto px-5 pt-6"/>
        <Button url="https://instagram.com" siteName="Instagram"/>
        <p className='mt-1 text-lg'>
        Instagram is a photo and video-sharing social network for visual content.</p> 
    </div>
  )
}

export default Tile3