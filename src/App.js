  import { useContext, useEffect, useState } from "react";
import "./App.css";
  import Names from "./Pages/Names/Names";
  import Notes from "./Pages/Notes/Notes";
import { Data } from "./Context/UserContext";

  function App() {

    const { showNotes }= useContext(Data);
    const [ isMobile , setIsMobile ] = useState(window.innerWidth<=400)

    useEffect (()=>{
      const handleResize=()=> setIsMobile(window.innerWidth<=400);
      window.addEventListener("resize",handleResize);
      return ()=>window.removeEventListener("resize", handleResize)
    },[])

    return (
      <div className="app">
        {isMobile ?  (
          <>
          {!showNotes && <Names />}
          {showNotes && <Notes />}
          </>
        ) : ( 
          <>
      
        <div className="names">
          <Names />
        </div>
        <div className="notes">
          <Notes />
        </div>
        </>
        )}
      </div>
    );
  }

  export default App;
