import {combineReducers} from 'redux'
import { jobReducer } from './jobs'

export const rootReducer = {
    jobs: jobReducer     
}