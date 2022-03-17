import Song from "./Song";

const SongList = ({ songs, updateSong, deleteSong}) => (
  <>
    { songs.map( (a) =>
      <Song
        key={a.id}
        value={a.duration}
        {...a}
        updateSong={updateSong}
        deleteSong={deleteSong}
      />
    )}
  </>
)

export default SongList;