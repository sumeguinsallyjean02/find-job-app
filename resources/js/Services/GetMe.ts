import axios from 'axios'

export const GetMe = async (
    token: string
): Promise<void> => {
    return axios.get('/api/users/me', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}