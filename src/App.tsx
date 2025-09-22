import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage.tsx";
import Destination from "./pages/destination.tsx"
import Crew from "./pages/crew.tsx"
import Technology from "./pages/technology.tsx";

import './App.css'


function App() {


  return (
    <>   
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </>
  )
}

export default App
