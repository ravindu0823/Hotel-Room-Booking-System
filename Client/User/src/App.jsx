import "./App.css";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roomshow from "./pages/Roomshow";
import RoomDetails from "./pages/RoomDetails";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import { SignInContext } from "./contexts/SignInContext";
import { useState } from "react";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";
import Userprofile from "./pages/Userprofile";
import Foodshow from "./pages/Foodshow";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <SignInContext.Provider value={{ loggedIn, setLoggedIn }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/rooms" element={<Roomshow />} />
            <Route path="/rooms/:id" element={<RoomDetails />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<Userprofile />} />
            <Route path="/foodshow" element={<Foodshow/>}/>
            {/* <Route path="/set-avatar" element={<SetAvatar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/login" element={<ChatLogin />} />
            <Route path="/chat/register" element={<ChatRegister />} />
            <Route path="/chat/set-avatar" element={<SetAvatar />} /> */}
          </Routes>
        </SignInContext.Provider>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
