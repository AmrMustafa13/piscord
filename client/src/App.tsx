import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChannelsSidebar from "./components/ChannelsSidebar";
import Chat from "./components/Chat";
import WelcomeToServer from "./components/WelcomeToServer";
import EmailVerification from "./pages/EmailVerification";
import VerifyingEmail from "./pages/VerifyingEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./contexts/auth";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={user ? <Navigate to="/channels" replace /> : <Landing />} />
        <Route
          path="/email-verification"
          element={user ? <Navigate to="/channels" replace /> : <EmailVerification />}
        />
        <Route path="/login" element={user ? <Navigate to="/channels" replace /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/channels" replace /> : <Register />}
        />
        <Route
          path="/verify"
          element={user ? <Navigate to="/channels" replace /> : <VerifyingEmail />}
        />
        <Route path="/channels" element={<Main />}>
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
