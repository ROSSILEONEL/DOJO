import { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";

const initialValues = {
  artist: "",
  song: ""
}

export function SongSearch() {
  const [search,setSearch]= useState(initialValues);
  const [lyric,setLyric]= useState(null);
  const [bio,setBio]= useState(null);
  const [loading, setLoading] = useState(false);

const handleSearch = (infoSong) => {
console.log(infoSong);  
setSearch(
  infoSong
)
console.log('handleSearch',search);
}


  return (
    <>
      <hr />

      <div>
        <h2>BUSCADOR DE CANCIONES</h2>
        <div className="song-page">
          <SongForm handleSearch={handleSearch}/>
          {loading && <Loader />}

          <SongDetails search={search} lyric={lyric} bio={bio}/>
        </div>
      </div>
      <hr />
    </>
  );
}
