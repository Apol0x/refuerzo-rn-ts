import { Contador } from "./component/Contador";
import { ContadorHook } from "./component/ContadorHook";
import { Login } from "./component/Login";
import { Usuarios } from "./component/Usuarios";
import { TiposBasicos } from "./typescript/TiposBasicos";
import { Formularios } from "./component/Formularios";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Refuerzo React native y typescript</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <Contador /> */}
      {/* <ContadorHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}
      <Formularios />
    </div>
  );
};

export default App;
