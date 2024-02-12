import { useEffect } from "react";
import "./App.css";
import { useAppDispatch } from "./store";
import { signUp } from "./store/auth-slice/auth-actions";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      signUp({
        email: "nicolas.penagosm@gmail.com",
        password: "jeronimo981120",
        returnSecureToken: true,
      })
    );
  }, []);
  return <></>;
}

export default App;
