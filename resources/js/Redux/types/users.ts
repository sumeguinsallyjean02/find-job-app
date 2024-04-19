export const SET_USER_TOKEN = 'SET_USER_TOKEN'

export interface ISetUserToken {
    type: typeof SET_USER_TOKEN
    payload: any
}

export interface IUser {
    password: string
    email: string
    type: string
}

export type TUserAction = ISetUserToken
