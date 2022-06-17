import Login from "./pages/login";
import Classroom from "./pages/classroom";
import { useEffect, useState } from "react";
import { getUser } from "./services/users-services";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { login } from "./services/sessions-service";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser()
      .then((u) => setUser(u))
      .catch((error) => console.log(error));
  }, []);

  return user ? <Classroom /> : <Login setUser={setUser} />;
}
export default App;
