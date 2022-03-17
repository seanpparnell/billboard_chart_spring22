import { useState } from 'react';
import SongForm from './SongForm';
// import { Link } from 'react-router-dom';

<<<<<<< HEAD

const Song = ({id, title, duration, updateSong, deleteSong}) => {
  const [editing, setEdit] = useState(false)

=======
const Song = ({id, title, duration, updateSong, deleteSong}) => {
  const [editing, setEdit] = useState(false)
>>>>>>> 8954061 (Songs Folder done)
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
<<<<<<< HEAD
        <h2>Duration: {duration} minutes</h2>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteSong(id)}>Delete</button>
=======
        <h2>Duration: {duration}</h2>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteSong(id)}>Delete</button>
        {/* <Link to={`/songs/${id}/songs`}>
          <button>
            go to Songs
          </button>
        </Link> */}
>>>>>>> 8954061 (Songs Folder done)
      </>
      }
    </>
  )
}
<<<<<<< HEAD
export default Song;
=======
export default Song;





>>>>>>> 8954061 (Songs Folder done)
