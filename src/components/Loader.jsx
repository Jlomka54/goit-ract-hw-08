import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
      <ClipLoader color="#2563EB" size={50} />
    </div>
  );
};

export default Loader;
