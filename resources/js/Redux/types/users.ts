export const SET_USER_TOKEN = 'SET_USER_TOKEN'

export const SET_USER = 'SET_USER'

export interface ISetUserToken {
    type: typeof SET_USER_TOKEN
    payload: any
}

export interface ISetUser {
    type: typeof SET_USER,
    payload: IUser
}

export interface IUser {
    email: string
    type: string
}

export type TUserAction = ISetUserToken | ISetUser
