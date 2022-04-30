import { LOADING_STATE } from "./action";

const initState={loading:false};

export const fetchDataReducer=(store=initState,{type,payload})=>{
switch(type){
    case LOADING_STATE:
        return {...store,loading:payload}

default:
    return store;
}
}
