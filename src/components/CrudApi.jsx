import { useState, useEffect } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { helpHttp } from "../service/helpHttp";
import { Loader } from "./Loader";
import { Message } from "./Message";

export function CrudApi() {
  const api = helpHttp();
  const url = "http://localhost:5000/personajes";
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    //podriamos llamar usando api.get(url) pero como es un get no es necesario
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
          setLoading(false);
        } else {
          setDb([]);
          setError(res);
          console.log("error", res);
        }
      });

    return () => {};
  }, []);
  
  //------------------------ CREATE ------------------------
  const createData = (data) => {
    data.id = Date.now();
    
    api.post(url, {
        body: data,
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (!res.err) {
          setDb([...db, res]);
        }
        console.log("res", res.ok);
      });
  };
//------------------------ UPDATE ------------------------
const updateData = (data) => {
  let endpoint = `${url}/${data.id}`;
  let option = {
    body: data,
    headers: { "content-type": "application/json" },
  };
  api.put(endpoint, option).then((res) => {
    if (!res.err) {
      const newData = db.map((el) => (el.id === data.id ? data : el));
      setDb(newData);
      }
    });
  };
  //------------------------ DELETE ------------------------

  const deleteData = (id) => {
    let kill = window.confirm(`¿Estás seguro de eliminar a ${id}?`);
    if (kill) {
      let endpoint = `${url}/${id}`;
      let option = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, option).then((res) => {
        if (!res.err) {
          const newData = db.filter((el) => el.id !== id);
          setDb(newData);
        }
      });
    }
  };

  return (
    <>
      <h2 className="text-center text-5xl  text-red-900 mt-0">CRUD API </h2>
      <p className="text-center">Using Json server, simulando una Api</p>
      <main className="flex flex-col justify-start items-center h-full m-0   w-full bg-zinc-50 ">
        <div className="card border text-center">
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />

          {error && <Message msg={error} />}
          {loading && <Loader />}
          {db && (
            <CrudTable
              data={db}
              deleteData={deleteData}
              setDataToEdit={setDataToEdit}
            />
          )}
        </div>
      </main>
    </>
  );
}
