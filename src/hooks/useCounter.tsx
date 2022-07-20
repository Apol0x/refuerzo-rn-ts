import { useState } from "react";

export const useCounter = (inicial: number = 0) => {
  const [valor, setValor] = useState(inicial);
  const acumular = (number: number) => {
    setValor(valor + number);
  };
  const restar = (number: number) => {
    setValor(valor - number);
  };

  return {
    valor,
    acumular,
    restar,
  };
};
