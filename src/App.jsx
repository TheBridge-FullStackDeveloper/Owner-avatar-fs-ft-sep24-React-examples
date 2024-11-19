import { useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Contexto de usuario
import { UserContext } from "./context/UserContext";

function App() {
  const [count, setCount] = useState(0);

  const [username, setUsername] = useState("bolito");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  // Datos a proveer a los componentes a través del contexto
  const userData = {
    username, // String
    updateUsername, // Función
  };

  return (
    <>
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </UserContext.Provider>
      <Footer />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi primera chamba en React {count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
