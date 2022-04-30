import {createStore,combineReducers,applyMiddleware} from "redux";

import { fetchDataReducer } from "../FetchedData/reducer";

const rootReducer=combineReducers(
    {
        loading:fetchDataReducer,
        
    }
)
const thunk=(store)=>(next)=>(action)=>{
if(typeof action ==="function") return action(store.dispatch)
next(action)
}


export const store=createStore(rootReducer,applyMiddleware(thunk));