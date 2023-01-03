import axios, {Method} from "axios";

const host = 'http://localhost:8080'
export const fetchApi = async (url: string, method: Method, data={} )=>{
  const result = await axios(`${host}${url}`, {
    method: method,
    headers: {},
    data: data,
  });

  if(!result.data){
    alert('TODO 예외 핸들링');
  }

  return result;
}


