import { Message } from "./Message";
import { SongLiryc } from "./SongLiryc";
import { SongArtist } from "./SongArtist";
/*eslint-disable*/
export function SongDetails({ search, lyric, bio }) {
  return (
    <>
      <h2>song details</h2>
      {lyric.error ||liyric.err|| lyric.name === "AbortError" ? (
        <Message
          msg={`Error, no existe la cancion o el artista ${search.song}`}
          bgColor="bg-red-700"
        />
      ) : (
        <SongLiryc />
      )}
      {bio.artist?(
        <SongArtist/>
      ):(
        <Message
          msg={`Error, no existe la cancion o el artista ${search.artist}`}
        bgColor="bg-red-700"
        />
      )}
    
    </>
  );
}
