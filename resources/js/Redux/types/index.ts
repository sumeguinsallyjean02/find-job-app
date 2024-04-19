import { IUser } from "./users";

export interface IUserState {
    user: IUser | null
    token?: string
}