
import { useState } from 'react';
import './App.css';
import SongList from './components/SongList';
import SongView from './components/SongView';

const songsArray = [
  {id: 1, name: 'Song 1', artist: 'artist1', rating: 1, genre: 'genre 1'},
  {id: 2, name: 'Song 2', artist: 'artist2', rating: 2, genre: 'genre 2'},
  {id: 3, name: 'Song 3', artist: 'artist3', rating: 3, genre: 'genre 3'},
  {id: 4, name: 'Song 4', artist: 'artist4', rating: 4, genre: 'genre 4'},
  {id: 5, name: 'Song 5', artist: 'artist5', rating: 5, genre: 'genre 5'},
]

function App() {
  const [clickedSong, setClickedSong] = useState({})

  console.log('clicked song', clickedSong);
  
  return (
    <div className="App">
      <SongList songs={songsArray} setClickedSong={setClickedSong}/>
      <SongView song={clickedSong} />
    </div>
  );
}

export default App;
