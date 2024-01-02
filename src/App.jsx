import "./App.css";
import "./input.css";
// import {CrudApp} from "./components/CrudApp";
import {CrudApi} from "./components/CrudApi";
import {ContactForm} from "./components/ContactForm";
// import {SongSearch} from "./components/SongSearch";
import SelectAnidados from "./components/SelectAnidados";
import { SelectAnidadosMircha } from "./components/SelectAnidadosMircha";
import {Modals} from "./components/Modals";
// initial db simula una base de datos


function App() {

  return(<>

  <hr /><hr />
  <hr /><hr />
  <Modals/>
  <hr /><hr />
  <hr /><hr />
  <ContactForm/>
  <hr /><hr />
  <SelectAnidadosMircha/>
  <hr /><hr />
  <SelectAnidados/>
  {/* <SongSearch/> */}
  <CrudApi/>
  <hr />
  {/* <CrudApp/> */}
  </>)

  }

  
export default App;
