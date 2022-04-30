import axios from "axios";
const URL="https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123";

//action type
export const LOADING_STATE="LOADING_STATE";
export const API_DATA="API_DATA";

//action creator

export const toggleLoading=(payload)=>({type:LOADING_STATE,payload});
export const setAPIData=(payload)=>({type:API_DATA,payload});
export const getDataFromAPI=()=>(dispatch)=>{
    dispatch(toggleLoading(true));
    axios.get(URL).then(({data})=>{
        console.log("my API response",data);
        dispatch(toggleLoading(false));
        dispatch(setAPIData(data))
     }).catch((e)=>{
        dispatch(toggleLoading(false)); 
        console.log("thunx error")})
}