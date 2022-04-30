import { useEffect, useState } from "react"
import axios from "axios"
export const InboxPage=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123").then((res)=>{
         setData(res.data)
        })
    })
    return(
        <>
        {data?.filter((e)=>{
        if(e.tag=="inbox"){
            return true;
        }
        }).map((e)=>{
            return(
                <div key={e.id} style={{display:"flex",lineHeight:"30px",border:"1px solid teal"}}>
                 <h3 style={{margin:"0px"}}>{e.subject}</h3>
                 {/* <h6>{e.tag}</h6> */}
                </div>
            )
        })}
        </>
    )
}