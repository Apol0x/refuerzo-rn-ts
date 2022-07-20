import { useState } from 'react';
/* <T extends Object> para definir Genericos usamos T y de donde extiende */
export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario);
  /* los keyof T validamos los campos que vamos a recibir según  el objeto
  que hemos definido */
  const handlerChange = (value: string, campo: keyof T) => {
    setState({
      ...formulario,
      [campo]: value
    });
    console.log('Formulario: ', state);
  };

  return {
    ...state,
    state,
    handlerChange
  };
};
