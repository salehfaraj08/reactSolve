import axios from 'axios'
const api = axios.create({
    baseURL: "https://6177fd139c328300175f5cd2.mockapi.io/users"
})

export const GetData = async () => {
    return await api.get("/")
}
export const DelData = async (id) => {
    return await api.delete("/" + id)
}
export const AddData = async (data) => {
    return await api.post("/" , data)
}
