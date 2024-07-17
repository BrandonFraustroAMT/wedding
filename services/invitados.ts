import axios from "axios";
//const baseUrl = "https://notes-sandy-nine.vercel.app/api/notes";
const baseUrl = "http://localhost:8000/invitados";

const getAll = async () => {
  try {
    //console.log("Iniciando solicitud a la API");
    const response = await axios.get(baseUrl);
    //console.log("Respuesta recibida de la API:", response);
    return response.data;
  } catch(err: any) {
    console.log(err);
  }
}


const update = (id: number, newObject: Invitado) => {
  try {
      const request = axios.put(`${baseUrl}/${id}`, newObject)
      //console.log('Services Notes: ', request.then(response => response.data))
      return request.then(response => response.data)
  } catch(err: any) {
    console.log(err);
  }
}

export default { getAll, update }

interface Invitado {
    id?: number;
    nombre?: string;
    acompañante?: string;
    niños?: string;
    confirmacion?: string;
}