<<<<<<< HEAD
import Song from "./Song";
=======
// import Artist from "./Artist";
 import Song from "./Song";
>>>>>>> 8954061 (Songs Folder done)

const SongList = ({ songs, updateSong, deleteSong}) => (
  <>
    { songs.map( (a) =>
      <Song
<<<<<<< HEAD
=======
        
>>>>>>> 8954061 (Songs Folder done)
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