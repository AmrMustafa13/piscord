import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChannelsSidebar from "./components/ChannelsSidebar";
import Chat from "./components/Chat";
import WelcomeToServer from "./components/WelcomeToServer";
import EmailVerification from "./pages/EmailVerification";
import { useState } from "react";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={isSignedIn ? <Navigate to="/channels" replace /> : <Landing />} />
        <Route
          path="/email-verification"
          element={isSignedIn ? <Navigate to="/channels" replace /> : <EmailVerification />}
        />
        <Route
          path="/login"
          element={isSignedIn ? <Navigate to="/channels" replace /> : <Login />}
        />
        <Route
          path="/register"
          element={isSignedIn ? <Navigate to="/channels" replace /> : <Register />}
        />
        <Route
          path="/channels"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Main />
            </Protected>
          }
        >
          <Route path=":serverId" element={<ChannelsSidebar />}>
            <Route index element={<WelcomeToServer />} />
            <Route path=":channelId" element={<Chat />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
