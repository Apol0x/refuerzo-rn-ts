import { useForm } from '../hooks/useForm';

export const Formularios = () => {
  const { email, password, handlerChange } = useForm({
    email: 'pepe@pepe.com',
    password: '123454'
  });
  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => handlerChange(target.value, 'email')}
      />

      <input
        type="text"
        className="form-control"
        placeholder="Password"
        value={password}
        onChange={({ target }) =>
          handlerChange(target.value, 'password')
        }></input>
    </>
  );
};
