import End from "./components/End";
import Intro from "./components/Intro";
import Message from "./components/Message";
import PlayMe from "./components/PlayMe";

import SwipeCards from "./components/SwipeCards";
import "./index.css";

function App() {
  return (
    <main className="flex flex-col items-center justify-center mt-5 text-center ml-5 mr-5">
      <Intro />
      <PlayMe />
      <Message />
      <SwipeCards />
      <End />
    </main>
  );
}

export default App;
