import { useCounter } from "../hooks/useCounter";

export const ContadorHook = () => {
  const { valor, acumular, restar } = useCounter();
  return (
    <>
      <h3>
        ContadorHook <small>{valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => restar(1)}>
        -1
      </button>
    </>
  );
};
