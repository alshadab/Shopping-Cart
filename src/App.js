import { useState } from "react";
import { Provider } from "react-redux";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import "./Component/styles/output.css";
import store from "./redux/Store";
function App() {
  const [status, setStatus] = useState(true);
  return (
    <Provider store={store}>
      <NavBar setStatus={setStatus} />
      {/* <!-- Navbar ends --> */}
      <Home status={status} />
    </Provider>
  );
}

export default App;
