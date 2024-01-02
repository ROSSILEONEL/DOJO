import { useState } from "react";
import { helpHttp } from "../service/helpHttp";
export const useForm = (initialForm, validationForm) => {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log("form", form);
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validationForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validationForm(form));
    if (Object.keys(error).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/leonelrossi1@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          console.log("Respuesta Ok - no Ok", res.ok);
        });
    }
    setInterval(() => {
        setResponse(null)
        setForm(initialForm)
    }, 5000);
  };

  return {
    form,
    loading,
    error,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
