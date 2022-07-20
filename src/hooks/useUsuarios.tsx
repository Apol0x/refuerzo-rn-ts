import { useRef, useState, useEffect } from "react";
import { Usuario, ResponseGetUserInt } from "../interfaces/ResponseGetUserInt";
import { getUsers } from "../api/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const pageRef = useRef(1);
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const response = await getUsers.get<ResponseGetUserInt>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    if (response.data.data.length > 0) {
      setUsuarios(response.data.data);
    } else {
      alert("No hay mas datos");
    }

    /* getUsers
        .get<ResponseGetUserInt>("/users")
        .then((response) => {
          setUsuarios(response.data.data);
          console.log("usuarios:", usuarios);
        })
        .catch(console.error); */
  };

  const pageNext = () => {
    pageRef.current++;
    loadUsers();
  };
  const pageBefore = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

  return {
    usuarios,
    pageNext,
    pageBefore,
  };
};
