import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  power: "",
  id: null,
};
/* eslint-disable*/
export function CrudForm({ createData, updateData, dataToEdit, setDataToEdit}) {
  const [form, setForm] = useState(initialForm);
  

  useEffect(() => {
    if(dataToEdit){
      setForm(dataToEdit)
    }else{
      setForm(initialForm)
    }
  }, [dataToEdit])
  
  const handledSubmit = (e) => {
    e.preventDefault();
    if(!form.name || !form.power){
      alert('Datos incompletos')
      return
    }
    if(form.id===null){
      createData(form)
    }else{
     updateData(form)
    }
  
    handledReset(e)
}

  const handledChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handledReset = (e) => {
    e.preventDefault();
    setForm(initialForm);
    setDataToEdit(null)
  };

  return (
    <>
      <h1 className="text-3xl">{dataToEdit?'Editar':'Agregar'}</h1>
      <form className="w-full  p-3 flex justify-evenly bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg gap-3 " action="submit" onSubmit={handledSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del personaje"
          onChange={handledChange}
          value={form.name}
        />
        <input
          type="text"
          name="power"
          placeholder="nivel de poder"
          onChange={handledChange}
          value={form.power}
        />
        <input
          className="flex-shrink-0 text-white bg-purple-500 border-0 py-0.5 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-10 sm:mt-0"
          type="submit"
          value="Enviar"
        />
        <input
          className="flex-shrink-0 text-white bg-purple-500 border-1 py-0.5 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-10 sm:mt-0"
          type="reset"
          value="Limpiar"
          onClick={handledReset}
        />
      </form>
    </>
  );
}
