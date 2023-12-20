import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roomshow from "./pages/Roomshow";
import RoomDetails from './pages/RoomDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/room" element={<Roomshow/>}/>
            <Route path="/rooms/:id" element={<RoomDetails />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
          </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
