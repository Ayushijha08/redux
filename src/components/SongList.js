import React from 'react'

const SongList = ({songs, setClickedSong}) => {
  return (
    <div className='song-list'>
        {songs.map(song => <div className='song-card' key={song.id} onClick={() => setClickedSong(song)}>{song.name}</div>)}
    </div>
  )
}

export default SongList