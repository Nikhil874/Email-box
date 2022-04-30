import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import {useNavigate }from "react-router-dom"
import axios from "axios";
export const SpecifigTag=()=>{
    const {tag}=useParams();
    // console.log(tag);
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123").then((res)=>{
         setData(res.data)
        })
    },[])
    const navigate=useNavigate();
    return(
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
                    <div key={e.id} style={{display:"flex",gap:"30px",lineHeight:"30px",border:"1px solid teal"}}  onClick={()=>{navigate(`/body/${e.id}`)}}>
                    <h3 style={{margin:"0px"}}>user:{e.userId}</h3>
                     <h3 style={{margin:"0px"}}>{e.subject}</h3>
                     {/* <h6>{e.tag}</h6> */}
                    </div>
                )
            })}
            </>
    )
}