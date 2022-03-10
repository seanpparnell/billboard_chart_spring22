import Artist from "./Artist"

const ArtistList = ({ artists }) => (
  <>
    { artists.map( a =>
      <Artist 
        key={a.id}
        {...a}
      />
    )}
  </>
)

export default ArtistList;