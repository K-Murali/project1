import logo from "./logo.svg";
import "./App.css";
import Aboutme from "./components/aboutme";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Ques from "./components/Ques";
import { useState } from "react";
import Alerts from "./components/alerts";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      color: type,
    });   
   setTimeout(() => {
    setalert(null)
   },4000);
    
  };

  const theme = () => {
    let e = document.body;

    if (mode === "light") {
      e.setAttribute("data-bs-theme", "dark");
      setmode("dark");
      showalert("welcome. This is Dark Mode Theme.", "success");
    } else {
      e.setAttribute("data-bs-theme", "light");
      setmode("light");
      showalert("welcome. This is light Mode Theme.", "info");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          latest="Temperaturs"
          dropdown="Cities"
          title="Text Utils"
          about="About API"
          theme={mode}
          mode={theme}
          contact="Contact us"
        />

        <div className="container-sm my-3">
          <Alerts alert={alert} />

          <Routes>
            <Route path="/about" element={<Aboutme />} />

            <Route
              path="/Home"
              element={
                <div className="container-sm  my-3">
                  
                  <Textform
                    showalert={showalert}
                    theme={mode}
                    heading="Enter the Text to Analyse"/>
                  <Ques className="my-3" />
                </div>
              }
            />
          </Routes>

          <button
            type="button"
            onClick={theme}
            className= {`btn my-3 btn-${mode === "light" ? "dark" : "light"}`}
          >
            {mode === "light" ? "dark" : "light"}Mode
          </button>
        </div>
      </Router>
    </>
  );
}

export default App;
