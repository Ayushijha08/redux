
import { useEffect, useState } from 'react';
import './App.css';
import SongList from './components/SongList';
import SongView from './components/SongView';
import { fetchProduct, fetchProductFailure, fetchProductRequest, fetchProductSuccess } from './actions';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux"
import axios from 'axios';
import { addBy, addBy10, increment } from './slices/counterSlice';
import Rtk from './component-redux/Rtk';




const songsArray = [
  { id: 1, name: 'Song 1', artist: 'artist1', rating: 1, genre: 'genre 1' },
  { id: 2, name: 'Song 2', artist: 'artist2', rating: 2, genre: 'genre 2' },
  { id: 3, name: 'Song 3', artist: 'artist3', rating: 3, genre: 'genre 3' },
  { id: 4, name: 'Song 4', artist: 'artist4', rating: 4, genre: 'genre 4' },
  { id: 5, name: 'Song 5', artist: 'artist5', rating: 5, genre: 'genre 5' },
]

function App() {
  // const [clickedSong, setClickedSong] = useState({})

  // console.log('clicked song', clickedSong);

  // const { loading, data, error } = useSelector((state) => state.data)
  const { counter } = useSelector((state) => state.counter)
  console.log("counter",counter);
  
  // console.log("jhdff", loading, data, error);

  const dispatch = useDispatch();

  function fetchProduct() {
    dispatch(fetchProductRequest())
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log(response.data)
        dispatch(fetchProductSuccess(response.data.products))
      }
      ).catch(err => {
        console.log(err.message);
        dispatch(fetchProductFailure(err.message))
      });

  }


  useEffect(() => {
    // fetchProduct()
  }, [])
// Redux Toolkit(RTK) is the most updated and recommended way to apply redux logic in an application. 
// it removes the boilerplate code and makes it easier to implement and write redux flow in a cleaner way.

// in order to implement redux toolkit in your application, u need to install redux toolkit package first -> npm i @reduxjs/toolkit

  // return (
  //   <div className="App">
  //     <SongList songs={songsArray} setClickedSong={setClickedSong}/>
  //     <SongView song={clickedSong} />
  //   </div>
  // );
  return(
    <div>
     <button onClick={() => dispatch(increment())}>click</button>
          <button onClick={() => dispatch(addBy(30))}>addby</button>
     <button onClick={() => dispatch(addBy10())}>by10</button>

    <h1>{counter}</h1>
    <Rtk />
    </div>
  )
}

export default App;
