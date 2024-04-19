import axios, { Axios } from 'axios'

export const LoginUser = async (
    email: string,
    password: string
): Promise<any> => {
    return axios.post('/api/users/login', {
        email, 
        password
    })
}