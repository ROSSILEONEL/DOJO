export function Message({msg}) {
    
    return(
        <>
        <h1 className="bg-rose-700 text-cyan-50 h-9">Se ha producido un error:     {msg.statusText}</h1>
        </>
    )
}