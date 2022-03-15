import Artist from "./Artist"

const ArtistList = ({ artists, updateArtist, deleteArtist }) => (
  <>
    { artists.map( (a) =>
      <Artist
        
        key={a.id}
        value={a.rank}
        {...a}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    )}
  </>
)

export default ArtistList;