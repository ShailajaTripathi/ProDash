import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import { AuthContext } from "./contaxt/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  // Initialize state with data from localStorage if it exists
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("Newuser");  // 
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // This function will be used by your Login page to update the state
  const login = (userData) => {
    localStorage.setItem("Newuser", JSON.stringify(userData));
    setUser(userData); // This triggers the re-render immediately
  };

  const logout = () => {
    localStorage.removeItem("Newuser");
    setUser(null);
  };

  return (
    //2. Pass both the user and the login/logout functions in the value
  <Provider store={store}>

    <AuthContext.Provider value={{ user, login, logout }}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AuthContext.Provider>

  </Provider>
  );
};

export default App;
