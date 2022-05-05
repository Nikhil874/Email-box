import {createStore,combineReducers,applyMiddleware} from "redux";

import { fetchDataReducer } from "../FetchedData/reducer";

const rootReducer=combineReducers(
    {
        loading:fetchDataReducer,
        
    }
)
//thunk is not updated 1 1/2 years so we better use custom
const thunk=(store)=>(next)=>(action)=>{
if(typeof action ==="function") return action(store.dispatch)

next(action)
}
// const nikhil=(store)=>(next)=>(action)=>{
//     console.log("mid2")
//     next(action)
// }

export const store=createStore(rootReducer,applyMiddleware(thunk));  //order is very important in applymiddleware