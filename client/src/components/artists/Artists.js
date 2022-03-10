import { useState, useEffect } from "react";
import axios from 'axios';
import ArtistForm from './ArtistForm';
import ArtistList from './ArtistList'

const Artists = ({ billboardId }) => {
  const [artists, setArtists] = useState([])

  useEffect( () => {
    axios.get(`/api/billboards/${billboardId}/artists`)
      .then( res => setArtists(res.data) )
      .catch( err => console.log(err))
  }, [])

  const addArtist = (artist) => {
    axios.post(`/api/billboards/${billboardId}/artists`, { artist })
      .then( res => {
        setArtists([...artists, res.data])
      })
      .catch( err => {
        console.log(err)
        alert(err.errors)
      })
  }

  // const updateArtist = (id, artist) => {
  //   axios.put(`/api/billboards/${billboardId}/artists`, { artist })
  //     .then( res => {
  //       const newUpdatedArtists = artists.map( a => {
  //         if (a.id === id) {
  //           return res.data
  //         }
  //         return a 
  //       })
  //       setArtists(newUpdatedArtists)
  //     })
  //     .catch( err => {
  //       console.log(err)
  //       alert(err.errors)
  //     })
  // }
  
  // const deleteArtist = (id) => {
  //   axios.delete(`/api/billboards/${billboardId}`)
  //    .then(res => {
  //      setArtists(artists.filter( b => b.id !== id))
  //      alert(res.data.message)
  //    })
  //    .catch( err => console.log(err))
  // }

  return (
    <>
    <h4>Artists</h4>
    <ArtistForm addArtist={addArtist} />
    <ArtistList 
      artists={artists}
    />
    </>
  )
}

export default Artists