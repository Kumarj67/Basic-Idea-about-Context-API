import "./App.css";
import { useState, createContext } from "react";
import Header from "./Components/Header";
import CompA from "./Components/CompA";

const AppState = createContext();
const nameContext = createContext();

function App() {
  const [data, setData] = useState("web3Mantra");
  const [name, setName] = useState({ name: "Jeetesh", age: 20 });
  return (
    <AppState.Provider value={{ data }}>
      <nameContext.Provider value={name}>
        <div className="comp">
          <Header />;
          <CompA />
        </div>
      </nameContext.Provider>
    </AppState.Provider>
  );
}

export default App;
export { AppState, nameContext };
