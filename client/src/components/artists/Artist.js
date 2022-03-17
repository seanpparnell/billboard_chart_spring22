import { useState } from 'react';
import ArtistForm from './ArtistForm';
import { Link } from 'react-router-dom';

const Artist = ({id, title, rank, updateArtist, deleteArtist}) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <h2>Edit Artist</h2>
          <ArtistForm 
            id={id}
            title={title}
            rank={rank}
            updateArtist={updateArtist}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
      :
      <>
        <h1>{title}</h1>
        <h2>Rank: {rank}</h2>
        <button onClick={() => setEdit(true)}>Edit</button>
        <button onClick={() => deleteArtist(id)}>Delete</button>
        <Link to={`/artists/${id}/songs`}>
          <button>
            go to Song
          </button>
        </Link>
      </>
      }
    </>
  )
}



export default Artist;