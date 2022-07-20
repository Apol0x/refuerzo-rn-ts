import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  toke: string | null;
  nombre: string;
  username: string;
}
const initialState: AuthState = {
  validando: true,
  toke: null,
  nombre: "",
  username: "",
};
type LoginPayload = { username: string; nombre: string };
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        toke: null,
        nombre: "",
        username: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        toke: "123131",
        nombre: nombre,
        username: username,
      };
    default:
      return state;
  }
};
export const Login = () => {
  const [{ validando, toke, nombre, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Francisco",
        username: "Almanzan",
      },
    });
  };

  const logOut = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {toke ? (
        <>
          <div className="alert alert-success">
            Autenticado {nombre} {username}
          </div>
          <button className="btn btn-danger" onClick={logOut}>
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No logeado...</div>{" "}
          <button className="btn btn-primary" onClick={login}>
            Login
          </button>
        </>
      )}
    </>
  );
};
