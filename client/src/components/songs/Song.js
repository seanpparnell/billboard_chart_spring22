import { useState } from 'react';
import SongForm from './SongForm';
// import { Link } from 'react-router-dom';


const Song = ({id, title, duration, updateSong, deleteSong}) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <h2>Edit Song</h2>
          <SongForm
            id={id}
            title={title}
            duration={duration}
            updateSong={updateSong}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      :
      <>
        <h1>{title}</h1>
        <h2>Duration: {duration} minutes</h2>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteSong(id)}>Delete</button>
      </>
      }
    </>
  )
}
export default Song;