import { IUserState } from "../types";
import { SET_USER, SET_USER_TOKEN, TUserAction } from "../types/users";

const initial_state : IUserState = {
    user : null
}
export function userLogic(
    state: IUserState = initial_state,
    action: TUserAction
) {
    switch(action.type) {
        case SET_USER_TOKEN:
            const payload : any = action.payload as any
            return Object.assign({}, state, {token: payload})
        case SET_USER:
            const userDetails : any = action.payload as any
            return Object.assign({}, state, {user: userDetails})
        default:
            return state

    }
}