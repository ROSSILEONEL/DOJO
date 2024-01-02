import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validationform = (form) => {
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  let error = {};
  if (!form.name.trim()) {
    error.name = "Debes agregar un nombre";
  }else if(!regexName.test(form.name.trim())){
    error.name = "Debes agregar un nombre valido, solo letras y espacios";
  }


  if (!form.email.trim()) {
    error.email = "Debes agregar un email";
  }else if(!regexEmail.test(form.email.trim())){
    error.email = "El email es incorrecto";
  }
  if (!form.subject.trim()) {
    error.subject = "Debes agregar un asunto";
  }
  if (!form.comments.trim()) {
    error.comments = "Debes agregar un comentario";
  }else if(!regexComments.test(form.comments.trim())){
    error.comments = "El comentario no puede superar los 255 caracteres";
  }
  return error;
};
export const ContactForm = () => {
  const {
    form,
    loading,
    error,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationform);
  return (
    <div className="flex flex-col items-center">
      <h2 className="">ContactForm</h2>
      <form
        className="flex flex-col gap-2 w-2/4 bg-gray-100 p-3 items-left"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Escribe tu nombre"
          required
        />
        {error.name && <p className="text-red-500">{error.name}</p>}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Escribe tu email"
          required
        />
        {error.email && <p className="text-red-500">{error.email}</p>}
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Asunto a tratar"
          required
        />
        {error.subject && <p className="text-red-500">{error.subject}</p>}
        <textarea
          name="comments"
          id=""
          cols="50"
          rows="5"
          value={form.comments}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Deja tu comentario"
          required
        ></textarea>
        {form.comments&& <p className={form.comments.length < 255 ? "text-green-500" : "text-red-500"}>{form.comments.length}/255</p>}
        {error.comments && <p className="text-red-500">{error.comments}</p>}
        <input
          className="bg-blue-500 text-white w-2/4 p-2 text-center self-center "
          type="submit"
          value="Enviar"
        />
        {response&& <p className="text-white bg-green-500 text-center">Enviado Correctamente</p>}
      </form>
    </div>
  );
};

export default ContactForm;

// onBlur porque cuando quite el foco del input va a realizar la validacion
