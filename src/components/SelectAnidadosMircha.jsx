import { useState } from "react";
import { SelectListMircha } from "./SelectListMircha";

export const SelectAnidadosMircha = () => {
  const [estado, setEstado] = useState(null);
  const [town, setTown] = useState(null);
  const [suburb, setSuburb] = useState(null);

  return (
    <div>
      <h2>SelectAnidadosMircha</h2>
      <h3>Mexico en la piel</h3>
      <SelectListMircha
        title="estado"
        url=""
        handleChange={(e) => {
          setEstado(e.target.value);
        }}
      />
     {town&& <SelectListMircha
        title='town'
        url={`acaVaLaUrlcon${town}`}
        handleChange={(e) => {
          setTown(e.target.value);
        }}
      />}
    {
      suburb&&   <SelectListMircha
      title="estado"
      url={`acaVaLaUrlcon${town}Ycon${suburb}`}
      handleChange={(e) => {
        setSuburb(e.target.value);
      }}
    />
    }
      <pre>
        <code>
          {estado}-{town}-{suburb}
        </code>
      </pre>
    </div>
  );
};
