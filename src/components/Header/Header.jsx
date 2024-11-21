import { useContext } from "react";
import { useNavigate }  from 'react-router-dom';
import Nav from "./Nav";
import { Button, Switch } from '@mui/material'

// Contexto de usuario
import { UserContext } from "../../context/UserContext";
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {

  const navigate = useNavigate();
  // Consume el nombre del contexto
  const { username, updateUsername } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleOnClick = () => navigate('/');

  return (
    <header className={`header-${theme}`}>
      <Nav />
      {username ? (
        <>
          <span>Hola, {username}</span>
          {/* <button onClick={() => updateUsername("")}>Logout</button> */}
          <Button size="small" color="error" style={{marginLeft: 20, marginRight:5}} onClick={() => updateUsername("")} variant="contained">Logout</Button>
        </>
      ) : (
        // <button onClick={() => handleOnClick()}>Login</button>
        <Button size="small" color="success" style={{marginRight: 20}} onClick={() => handleOnClick()} variant="contained">Login</Button>
      )}
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
};

export default Header;
