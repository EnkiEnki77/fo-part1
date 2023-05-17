import axios from "axios";

const url = 'http://localhost:3002/persons'

const getAll = () => {
    const request = axios.get(url)
    return request.then(res => res.data)
}

const create = (newObj) => {
    const request = axios.post(url, newObj)
    return request.then(res => res.data)
}

const update = (id, newObj) => {
    const request = axios.put(`${url}/${id}`, newObj)
    return request.then(res => res.data)
}

const deletion = (id) => {
    const request = axios.delete(`${url}/${id}`)
    return console.log(`Number deleted`)
}

export {getAll, create, update, deletion}