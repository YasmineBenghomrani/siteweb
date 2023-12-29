import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <main>
      <div className="action">
        <Link to={"About"}>
          <input type="button" value="About" />
        </Link>
        <Link to={"Blog"}>
          <input type="button" value="Blog" />
        </Link>
      </div>
    </main>
  );
}

export default App;
