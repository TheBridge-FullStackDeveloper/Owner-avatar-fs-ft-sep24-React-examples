import { useState, useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Contextos
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [username, setUsername] = useState("bolito");
  const [theme, setTheme] = useState("night"); 

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "day" ? "night" : "day");
  };

  // Datos del usuario
  const userData = {
    username,
    updateUsername,
  };

  // Datos del tema
  const themeData = {
    theme,
    toggleTheme,
  };

  return (
    <div data-theme={theme}>
      <UserContext.Provider value={userData}>
        <ThemeContext.Provider value={themeData}>
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
