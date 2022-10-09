import React from "react";
import { Loading } from "@nextui-org/react";

function Loader() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading size="xl" />
    </div>
  );
}

export default Loader;
