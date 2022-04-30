import { useEffect, useState } from "react";


import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../FetchedData/action";
import { CircularProgress } from "@mui/material";
import { ListView } from "./UI/ListView";

export const InboxPage = () => {
  let { loading, data } = useSelector((store) => store.loading);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);
 
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {data
            ?.filter((e) => {
              if (e.tag == "inbox") {
                return true;
              }
            })
            .map((e) => (
              <ListView key={e.id} data={e} />
            ))}
        </>
      )}
    </>
  );
};
