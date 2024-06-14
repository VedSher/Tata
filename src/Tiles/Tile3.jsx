import React from 'react'
import Button from '../Button'

function Tile3() {
  return (
    <div className="h-100 w-60 px-3 rounded-lg bg-amber-200 flex-wrap">
        <img src="/icons/X.png" alt="X" className="h-30 w-auto px-5 pt-6"/>
        <Button url="https://twitter.com" siteName="Twitter"/>
        <p className='mt-1 text-lg'>
Twitter is a microblogging platform for short updates and real-time communi-cation.</p> 
    </div>
  )
}

export default Tile3