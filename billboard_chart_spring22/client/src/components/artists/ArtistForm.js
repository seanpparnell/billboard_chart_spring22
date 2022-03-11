import { useState, useEffect } from "react";


const ArtistForm = ({ addArtist, id, title, rank, updateArtist, setArtist }) => {
  const [artist, setArtist] = useState({title: '', rank: ''})


useEffect( () => {
  if (id) {
    setArtist ({ title, rank })
  }

}, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    addArtist(artist)
    setArtist({ title: '', rank: '' })
  }
  

return (
  <>
    <form onSubmit={handleSubmit}>
    <label>Title:</label>
    <input
          name="title"
          value={artist.title}
          onChange={ (e) => setArtist({ ...artist, title: e.target.value })}
          placeholder="Title"
          required
        />

        <label>Rank:</label>
        <input
          name="rank"
          value={artist.rank}
          onChange={ (e) => setArtist({ ...artist, rank: e.target.value })}
          placeholder="Rank"
          required
        />
        <button type="submit">Submit</button>

    </form>
  </>
)

}

export default ArtistForm;