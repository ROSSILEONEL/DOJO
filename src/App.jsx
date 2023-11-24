import "./App.css";
import "./input.css";
// import {CrudApp} from "./components/CrudApp";
import {CrudApi} from "./components/CrudApi";
// import {SongSearch} from "./components/SongSearch";


// initial db simula una base de datos


function App() {

  return(<>
  {/* <SongSearch/> */}
  <CrudApi/>
  <hr />
  {/* <CrudApp/> */}
  </>)

  }

export default App;
