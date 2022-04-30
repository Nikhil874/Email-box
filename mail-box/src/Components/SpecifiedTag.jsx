import { useParams } from "react-router-dom";
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {  getDataFromAPI } from "../FetchedData/action";
import { CircularProgress } from "@mui/material";
import { ListView } from "./UI/ListView";
export const SpecifigTag = () => {
  const { tag } = useParams();
 

  let {loading,data} = useSelector((store) => store.loading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFromAPI());
  }, []);
  const navigate = useNavigate();
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {data
            ?.filter((e) => {
              if (tag == "all") {
                return true;
              } else if (e.tag == tag) {
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
