import { Routes, Route } from "react-router-dom";
import Servers from "./pages/Servers";
import ChannelsSidebar from "./components/ChannelsSidebar";
import Chat from "./components/Chat";
import WelcomeToServer from "./components/WelcomeToServer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channels/" element={<Servers />}>
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
