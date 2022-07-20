import { useUsuarios } from "../hooks/useUsuarios";
import { Usuario } from "../interfaces/ResponseGetUserInt";
export const Usuarios = () => {
  const { usuarios, pageBefore, pageNext } = useUsuarios();

  const renderUsers = ({ avatar, email, first_name, id }: Usuario) => {
    return (
      <tr key={id}>
        <td>
          <img
            style={{ width: 50, borderRadius: 100 }}
            src={avatar}
            alt={"Avatar del usuario " + first_name}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderUsers)}</tbody>
      </table>
      <button onClick={pageNext}>Siguiente</button>
      <button onClick={pageBefore}>Anteriores</button>
    </>
  );
};
