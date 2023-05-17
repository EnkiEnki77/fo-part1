import axios from "axios";
const url = `http://localhost:3001/notes`

function getAll(){
   const request = axios.get(url)
   return request.then(res => res.data)
}

function create(newObj){
    const request = axios.post(url, newObj)
    return request.then(res => res.data)
 }

 function update(id, newObj){
    const request = axios.put(`${url}/${id}`, newObj)
    return request.then(res => res.data)
 }

 export {getAll, create, update}