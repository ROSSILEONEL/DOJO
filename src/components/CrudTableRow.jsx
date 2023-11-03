/* eslint-disable*/
export  function CrudTableRow({el,setDataToEdit,deleteData}) {
    const {name,power,id}=el
    
    return (
        
        <>
       <tr className="border  w-full align-middle ">
         {/* eslint-disable */}
       <td className="text-2xl align-middle justify-center ml-4 flex justify-items-center  items-center text-center ">{name}</td>
                        <td>{power}</td>
                        <td className="flex flex-row justify-end gap-2 text-center">
                            <button className="flex-shrink-0 text-white bg-purple-500 border-0 py-0.5 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-10 sm:mt-0" onClick={()=>{setDataToEdit(el)}}>Editar</button>
                            <button className="flex-shrink-0 text-white bg-purple-500 border-0 py-0.5 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg mt-10 sm:mt-0" onClick={()=>{deleteData(el.id)}}>Eliminar</button>
                        </td>
       </tr>
       </>
    )}