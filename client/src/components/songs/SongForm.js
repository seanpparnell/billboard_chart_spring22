import { useState, useEffect } from "react";


const SongForm = ({ addSong, id, title, duration, updateSong, setEdit }) => {
  const [song, setSong] = useState({title: '', duration: ''})

  useEffect( () => {
    if (id) {
      setSong({title, duration})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong(song)
    }
    setSong({ title: '', duration: '' })
  }
  

return (
  <>
    <form onSubmit={handleSubmit}>
      <label>Song Title:</label>
    <input
          name="title"
          value={song.title}
          onChange={ (e) => setSong({ ...song, title: e.target.value })}
          placeholder="Title"
          required
        />
        <label>Duration:</label>
        <input
          name="duration"
          value={song.duration}
          onChange={ (e) => setSong({ ...song, duration: e.target.value })}
          placeholder="Duration"
          required
        />
        <button type="submit">Submit</button>

    </form>
  </>
)

}

export default SongForm;