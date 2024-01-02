import { useFetch } from "../hooks/useFetch"
import {Loader} from "./Loader"
import {Message} from "./Message"



/* eslint-disable */
export const SelectListMircha = ({url,title,handleChange}) => {
  const {data,loading,error} = useFetch(url)
  
if(error){
  return <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="bg-red-700"/>
}





  let id=  `select-${title}`
  let label= title.charAt(0).toUpperCase() + title.slice(1);
  
  
  return (

    <div>
      <h2>SelectListMircha</h2>
      {loading&&<Loader/>}
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={handleChange}>
        <option value=""> elige un {title}</option>
        {data&&data.map((item)=>{
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </select>
    </div>
  )
}
