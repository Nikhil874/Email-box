import { LOADING_STATE,API_DATA } from "./action";

const initState={loading:false,data:[]};

export const fetchDataReducer=(store=initState,{type,payload})=>{
switch(type){
    case LOADING_STATE:
        return {...store,loading:payload}
    case API_DATA:
        return {...store,data:payload}
default:
    return store;
}
}
