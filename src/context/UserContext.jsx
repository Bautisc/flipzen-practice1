import { createContext, useContext, useEffect, useState } from "react";
import { adminUsersDummy, enrolledUsersDummy } from "../utils/dummyDB";

// Creamos el contexto con valores iniciales vacíos
const UsersContext = createContext({ enrolledUsers: [], adminUsers: [] });

export const UsersProvider = ({ children }) => {
  const [enrolledUsers, setEnrolledUsers] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setEnrolledUsers(enrolledUsersDummy);
        setAdminUsers(adminUsersDummy);
      } catch (err) {
        console.error("Error fetching data:", err)
      }
    };

    fetchData();
  }, []);

  return (
    <UsersContext.Provider value={{ enrolledUsers, adminUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

// Hook para acceder al contexto
export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("useUsers debe usarse dentro de un UsersProvider");
  return context;
};
