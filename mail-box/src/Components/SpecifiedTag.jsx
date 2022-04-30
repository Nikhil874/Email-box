import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import {useNavigate }from "react-router-dom"
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { toggleLoading } from "../FetchedData/action";
import { CircularProgress } from "@mui/material";
export const SpecifigTag=()=>{
    const {tag}=useParams();
    const [data,setData]=useState([]);
    // console.log(tag);
    let loading =useSelector((store)=>store.loading);
    let dispatch=useDispatch();
    
    useEffect(()=>{
        dispatch(toggleLoading(true))
        axios.get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123").then((res)=>{
            dispatch(toggleLoading(false));
         setData(res.data)
        })
    },[])
    const navigate=useNavigate();
    return(
        <>
        {loading?<CircularProgress/>:
        <>
        {data?.filter((e)=>{
            if(tag=="all"){
                return true;
            }
            else if(e.tag==tag){
                return true;
            }
            }).map((e)=>{
                return(
                    <div key={e.id} style={{display:"flex",gap:"30px",lineHeight:"30px", boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}}  onClick={()=>{navigate(`/body/${e.id}`)}}>
                    <h3 style={{margin:"0px"}}>user:{e.userId}</h3>
                     <h3 style={{margin:"0px"}}>{e.subject}</h3>
                     {/* <h6>{e.tag}</h6> */}
                    </div>
                )
            })}
            </>}
            </>
    )
}