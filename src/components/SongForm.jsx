import { useState } from "react";

export function SongForm({handleSearch}) {
    const [form,setForm] = useState(null)

const handleChange=(e)=>{
    console.log('-->',e.target.name,'<--',e.target.value);
    setForm({
            ...form,
            [e.target.name]: e.target.value
        } )
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!form.artista || !form.song){
            alert('Datos incompletos')
            return
        }
        handleSearch(form)
    }


    return(
        <>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name='artista' placeholder="Artista" onChange={handleChange} />
            <input type="text" name='song' placeholder="song" onChange={handleChange} />
<input type="submit" />
        </form>
        
        </>
    )
}