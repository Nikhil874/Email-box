import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch ,useSelector} from 'react-redux';
import { toggleLoading } from "../FetchedData/action";
import { CircularProgress } from "@mui/material";
export const BodyPage=()=>{
    const {id}=useParams();
    let loading =useSelector((store)=>store.loading);
    let dispatch=useDispatch();
    // console.log(id)
    const [data,setData]=useState({});
    useEffect(()=>{
        dispatch(toggleLoading(true))
        axios.get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123").then((res)=>{
            // console.log(res.data);
            dispatch(toggleLoading(false))
         let req=res.data.filter((e)=>{
             if(e.id=id){
                 return true;
             }
          
     
         })
         setData(req[0])
        //  console.log(res.data)
        })
    },[])
    return (
        <>
        {loading?<CircularProgress/>:
        <>
        <div style={{textAlign:"left",margingTop:"-30px",border:"1px solid red",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",height:"150%"}}>
        <h3>Tag:{data.tag}</h3>
        <h2>From:user{data.userId}</h2>
        <h2>Subject:{data.subject}</h2>
        <h3>Body:</h3>
        <p>{data.body}</p>
        </div>
        </>}
        </>
    )
}