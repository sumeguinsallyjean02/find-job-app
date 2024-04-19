import { SET_USER_TOKEN } from "../types/users";

export function setUserToken(
    payload: any
) {
    return {
        type: SET_USER_TOKEN,
        payload
    }
}