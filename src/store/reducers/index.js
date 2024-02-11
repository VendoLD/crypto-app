import { combineReducers } from "@reduxjs/toolkit";
import {tokenReducer} from '../reducers/tokenSlice'

export const rootReducer = combineReducers({
    tokenReducer,
})