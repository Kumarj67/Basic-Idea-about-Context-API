import React, { useContext } from "react";
import { AppState, nameContext } from "../App";

const CompC = () => {
  const AppData = useContext(AppState);
  const nameData = useContext(nameContext);

  return (
    <div className="compC">
      <div>CompC</div>
      <h1>{AppData.data}</h1>
      <h1>Name:{nameData.name}</h1>
      <h1>Age:{nameData.age}</h1>
    </div>
  );
};

export default CompC;
