import React from 'react'
import Tile1 from './Tiles/Tile1'
import Tile2 from './Tiles/Tile2'
import Tile3 from './Tiles/Tile3'
import Tile4 from './Tiles/Tile4'

function Navigation() {
  return (
    <div className="mt-10 h-full w-screen flex gap-5">
        <Tile1 />
        <Tile2 />
        <Tile3 />
        <Tile4 />
    </div>
  )
}

export default Navigation