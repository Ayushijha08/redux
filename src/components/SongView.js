import React from 'react'

const SongView = ({song}) => {
  return (
    <div className='song-view'>
        <h1>{song.name}</h1>
        <h2>{song.artist}</h2>
        <h3>{song.genre}</h3>
        <h4>{song.rating}</h4>
    </div>
  )
}

export default SongView