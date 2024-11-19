import { useContext } from "react";
import { useNavigate }  from 'react-router-dom'
import Nav from "./Nav";

// Contexto de usuario
import { UserContext } from "../../context/UserContext";

const Header = () => {

  const navigate = useNavigate();
  // Consume el nombre del contexto
  const { username, updateUsername } = useContext(UserContext);

  const handleOnClick = () => navigate('/');

  return (
    <header>

      {username?
      <>
        <span>Hola, {username}</span>
        <button onClick={() => updateUsername("")}>Logout</button>
      </>
      :<button onClick={()=>handleOnClick()}>Login</button>}
      

      <Nav />
    </header>
  );
};

export default Header;
