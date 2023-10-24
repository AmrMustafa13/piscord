import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChannelsSidebar from "./components/ChannelsSidebar";
import Chat from "./components/Chat";
import WelcomeToServer from "./components/WelcomeToServer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/channels/" element={<Home />}>
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
