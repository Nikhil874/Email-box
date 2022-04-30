import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getDataFromAPI } from "../FetchedData/action";
import { CircularProgress } from "@mui/material";
export const DetailView = () => {
  const { id } = useParams();

  let dispatch = useDispatch();
  let { loading, data } = useSelector((store) => store.loading);
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
            .filter((e) => {
              if (e.id == id) {
                return true;
              }
            })
            .map((e) => {
              return (
                <div
                  key={e.id}
                  style={{
                    textAlign: "left",
                    boxShadow:
                      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                    height: "150%",
                  }}
                >
                  <h3
                    style={{ margin: "0px 10px 10px 10px", paddingTop: "10px" }}
                  >
                    Tag:{e.tag}
                  </h3>
                  <h2 style={{ margin: "10px" }}>From:user{e.userId}</h2>
                  <h2 style={{ margin: "10px" }}>Subject:{e.subject}</h2>
                  <h3 style={{ margin: "10px" }}>Body:</h3>
                  <p style={{ margin: "10px" }}>{e.body}</p>
                </div>
              );
            })}
        </>
      )}
    </>
  );
};
