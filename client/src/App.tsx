import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ChannelsSidebar from "./components/ChannelsSidebar";
import Chat from "./components/Chat";
import WelcomeToServer from "./components/WelcomeToServer";
import { useState } from "react";
import Protected from "./components/Protected";

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Protected isSignedIn={isSignedIn}>
            <Landing />
          </Protected>
        } />
        <Route path="/login" element={
          <Protected isSignedIn={isSignedIn}>
            <Login />
          </Protected>
        } />
        <Route path="/register" element={
          <Protected isSignedIn={isSignedIn}>
            <Register />
          </Protected>
        } />
        <Route path="/channels/" element={
          isSignedIn ? <Home /> : <Navigate to="/login" />
        }>
          <Route path=":serverId" element={<ChannelsSidebar />}>
            <Route index element={<WelcomeToServer />} />
            <Route path=":channelId" element={<Chat />} />
          </Route>
        </Route>
      </Routes >
    </>
  );
}

export default App;
