import {combineReducers} from 'redux'
import { jobReducer } from './jobs'
import { userLogic } from './users'

export const rootReducer = {
    jobs: jobReducer,
    users: userLogic    
}