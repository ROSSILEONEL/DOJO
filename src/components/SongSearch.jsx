import { useState, useEffect } from "react";
import { SongForm } from "./SongForm";
import { SongDetails } from "./SongDetails";
import { Loader } from "./Loader";

export function SongSearch() {
  // const [search,setSearch]= useState(null);
  // const [lyric,setLyric]= useState(null);
  // const [bio,setBio]= useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <hr />

      <div>
        <h2>BUSCADOR DE CANCIONES</h2>
        <div className="song-page">
          <SongForm />
          {loading && <Loader />}

          <SongDetails />
        </div>
      </div>
      <hr />
    </>
  );
}
