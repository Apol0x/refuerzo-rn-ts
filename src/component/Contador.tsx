import React, { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);
  const acumular = (number: number) => {
    setValor(valor + number);
  };
  const restar = (number: number) => {
    setValor(valor - number);
  };
  return (
    <>
      <h3>
        Contador <small>{valor}</small>
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
