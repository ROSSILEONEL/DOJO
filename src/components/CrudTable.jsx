import { CrudTableRow } from "./CrudTableRow";

export function CrudTable({ data,setDataToEdit,deleteData }) {
  
  return (
    <>
     
      <table className="border-spacing-24 border w-full text-center  h-72 bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg ">
        <thead className=" bg-slate-200">
          <tr className=" ">
            <th className="">Nombre</th>
            <th>Poder</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable */}
          {/* componente Row */}
          {data.length === 0 ? (
            <tr className="border-black text-center">
              <td >Sin datos</td>
            </tr>
          ) : (
            data.map((el) => <CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData}/>)
          )}
        </tbody>
      </table>
    </>
  );
}
