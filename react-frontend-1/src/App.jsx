import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import FileBrowser from "./components/fileBrowser";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <FileBrowser />
    </>
  );
}

export default App;
