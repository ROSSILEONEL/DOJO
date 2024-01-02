import SelectList from "./SelectList";
import { useState, useEffect } from "react";
import provList from "../mocks/provincia.json";
import departamentos from "../mocks/departamentos.json";

const SelectAnidados = () => {
  // console.log(provList);
  const [prov, setProv] = useState(null);
  const [localidad, setLocal] = useState(null);
  const [depFilter, setDepFilter] = useState(null);


  const getProv = (data) => {
    setProv(data);
  };

  const getLocal = (data) => {
    setLocal(data);
  };

  useEffect(() => {
    
      setDepFilter(
      departamentos.departamentos.filter((it) => it.provincia.nombre === prov)
      );
      }, [prov]);

    

  return (
    <div>
      <hr />
      <h3 className="text-center">Select anidados desde Mock -- Rossi </h3>
      <div className="cabecera-select text-center w-full bg-sky-900 font-bold text-white text-xl">
        <h1>Argentina</h1><span>-{prov}-{localidad}
        </span>
        </div>
      <div className="flex w-0.5 flex-row bg-slate-500">
        <SelectList
          className="w-2px bg-slate-600"
          cabecera="Provincia"
          cuerpo={provList.provincias}
          getData={getProv}
        />
        
        {depFilter ? (
          <SelectList
            cabecera="Provincia"
            cuerpo={depFilter}
            getData={getLocal}
          />
        ) : null}
      </div>
<hr />
    </div>
  );
};

export default SelectAnidados;
