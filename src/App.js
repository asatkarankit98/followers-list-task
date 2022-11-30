import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import FollowersList from "./FollowersList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/followers" element={<FollowersList />} />
      </Routes>
    </div>
  );
}

export default App;
