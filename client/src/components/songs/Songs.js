import { useState, useEffect } from "react";
import axios from 'axios';
import SongForm from './SongForm';
import SongList from './SongList';
import { useLocation, useParams } from "react-router-dom";



const Songs = ({}) => {
  const [songs, setSongs] = useState([])

  // const location = useLocation();
  // const {artistId, artistTitle} = location.state
  const {artistId, artistTitle} = useParams();
  
  useEffect( () => {
    axios.get(`/api/artists/${artistId}/songs`)
      .then( res => setSongs(res.data) )
      .catch( err => console.log(err))
  }, [])
  
  const addSong = (song) => {
    axios.post(`/api/artists/${artistId}/songs`, { song })
      .then( res => setSongs([...songs, res.data]) )
      .catch( err =>
        console.log(err) )
  }
  
  const updateSong = (id, song) => {
    axios.put(`/api/artists/${artistId}/songs/${id}`, { song })
      .then( res => {
        const newUpdatedSongs = songs.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        setSongs(newUpdatedSongs)
      })
      .catch( err => {
        console.log(err)
        alert(err.errors)
      })
  }
  
  const deleteSong = (id) => {
    axios.delete(`/api/artists/${artistId}/songs/${id}`)
     .then(res => {
       setSongs(songs.filter( s => s.id !== id))
       alert(res.data.message)
     })
     .catch( err => console.log(err))
  }
  
  
  return (
    <>
    <h4>Artist: {artistTitle}</h4>
    
    <h3>Songs</h3>
    <SongForm addSong={addSong} />
    <SongList
      songs={songs}
      updateSong={updateSong}
      deleteSong={deleteSong}
    />
    </>
  )
}
export default Songs;

