export const helpHttp = () => {
  //en defaultHeader se puede agregar mas opciones de cabecera
  //una cabecera es un objeto que se envia en la peticion para que el servidor sepa que tipo de datos se esta enviando
  //en este caso se envia un json
  //abortcontroller es una clase que permite abortar una peticion
  //signal es una propiedad de options que permite abortar una peticion
  //se le asigna el valor de controller.signal que es la propiedad que permite abortar la peticion

  const customFetch = (endpoint, options) => {
    const defaultHeader = {accept: "application/json",};

    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers ? {...defaultHeader,...options.headers}: defaultHeader;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, options)
      .then((resp) =>
        resp.ok
          ? resp.json()
          : Promise.reject({
              err: true,
              status: resp.status || "00",
              statusText: resp.statusText || "Ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => customFetch(url, options);

  const post = (url, options) => {
    options.method = "POST";
    return customFetch(url, options);
  };
  const put = (url, options) => {
    options.method = "PUT";
    return customFetch(url, options);
  };
  const del = (url, options) => {
    options.method = "DELETE";
    return customFetch(url, options);
  };

  return { get, post, put, del };
};
