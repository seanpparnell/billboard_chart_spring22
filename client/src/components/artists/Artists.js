import { useState, useEffect } from "react";
import axios from 'axios';
import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList';
import { useLocation, useParams } from "react-router-dom";

const Artists = ({}) => {
  const [artists, setArtists] = useState([])
  const location = useLocation();
  const {billboardId, billboardTitle} = location.state
  // const { billboardId, billboardTitle  } = useParams()

  useEffect( () => {
    axios.get(`/api/billboards/${billboardId}/artists`)
      .then( res => setArtists(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addArtist = (artist) => {
    axios.post(`/api/billboards/${billboardId}/artists`, { artist })
      .then( res => setArtists([...artists, res.data]) )
      .catch( err => 
        console.log(err) )
  }

  const updateArtist = (id, artist) => {
    axios.put(`/api/billboards/${billboardId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedArtists = artists.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a 
        })
        setArtists(newUpdatedArtists)
      })
      .catch( err => {
        console.log(err)
        alert(err.errors)
      })
  }
  
  const deleteArtist = (id) => {
    axios.delete(`/api/billboards/${billboardId}/artists/${id}`)
     .then(res => {
       setArtists(artists.filter( b => b.id !== id))
       alert(res.data.message)
     })
     .catch( err => console.log(err))
  }

  return (
    <>
    <h4>Billboard: {billboardTitle}</h4>
    {/* <h4>{billboardDescription}</h4> */}
    <h3>Artists</h3>
    <ArtistForm addArtist={addArtist} />
    <ArtistList 
      artists={artists}
      updateArtist={updateArtist}
      deleteArtist={deleteArtist}
    />
    </>
  )
}

export default Artists;