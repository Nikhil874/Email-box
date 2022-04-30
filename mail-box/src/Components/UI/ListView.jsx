import { useNavigate, Link } from "react-router-dom";
export const ListView = ({ data }) => {
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "30px",
          lineHeight: "30px",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
        onClick={() => {
          navigate(`/detail-view/${data.id}`);
        }}
      >
        <h3 style={{ margin: "0px" }}>user:{data.userId}</h3>
        <h4 style={{ margin: "0px" }}>{data.subject}</h4>
      </div>
    </>
  );
};
