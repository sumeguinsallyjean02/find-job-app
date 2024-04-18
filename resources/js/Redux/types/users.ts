
const SET_USER_TYPE = 'SEY_USER_TYPEÍ'

type userType = 'Seeker' | 'Employeer' | 'Moderator'

export interface ISetUserType {
    payload : userType
}

export interface IUser {
    userType: userType
    email: string
}