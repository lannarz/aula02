import { useEffect, useState } from "react";

export default function App() {
  
  const [user,setUsuario] = useState([]);

  useEffect(() => { 

    const  xxUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    xxUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        <li>
        <p>{user?.gender}</p>
        </li>
  
      </ul>
    </>
  );
}