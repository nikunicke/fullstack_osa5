import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token }
    }
    const req = await axios.post(baseUrl, newObject, config)
    return req.data
}

const update = async (id, newObject) => {
    const req = await axios.put(`${baseUrl}/${id}`, newObject)
    return req.data
}

const remove = async id => {
    const config = {
        headers: { Authorization: token }
    }
    const req =  await axios.delete(`${baseUrl}/${id}`, config)
    return req.data
}

export default { getAll, create, update, remove, setToken }