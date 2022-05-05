import { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../FetchedData/action";
import { CircularProgress } from "@mui/material";
import { ListView } from "./UI/ListView";

export const InboxPage = () => {
  let { loading, data } = useSelector((store) => store.loading);

  let dispatch = useDispatch();
  useEffect(() => {
    console.log("diaptch dependency")
    dispatch(getDataFromAPI("inbox","tag"));
  },[dispatch]); //we can use but we does effect because it is not variable
 
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {data.map((e) => (
              <ListView key={e.id} data={e} />
            ))}
        </>
      )}
    </>
  );
};
