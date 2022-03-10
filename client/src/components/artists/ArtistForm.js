import { useState } from "react"


const ArtistForm = ({ addArtist }) => {
  const [artist, setArtist] = useState({title: '', rank: ''})

  const handleSubmit = (e) => {
    e.preventDefault()
    addArtist(artist)
    setArtist({ title: '', rank: '' })
  }

return (
  <>
    <form onSubmit={handleSubmit}>
    <input
          name="title"
          value={artist.title}
          onChange={ (e) => setArtist({ ...artist, title: e.target.value })}
          placeholder="Title"
          required
        />
        <input
          name="rank"
          value={artist.rank}
          onChange={ (e) => setArtist({ ...artist, rank: e.target.value })}
          placeholder="Description"
          required
        />
        <button type="submit">Submit</button>

    </form>
  </>
)

}

export default ArtistForm