import { useState } from "react";

const SelectList = ({ cabecera, cuerpo,getData }) => {
  //eslint-disable-next-line


  const handleChange = (e) => {
    console.log(e.target.value);
    // setProv(e.target.value)
    getData(e.target.value)
  };
  return (
    <div className="div">
      <select className="w-50 " key='select' name="" id="" onChange={(e)=>{handleChange(e)}}>
        <option key ='prov' value="">{cabecera}</option>
        {/* eslint-disable */}
        {cuerpo.map((item) => {
          return (
            <option
              key={item.nombre}
              value={item.nombre}
              
            >
              {item.nombre}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectList;
