import React from "react";
import CounterApp from "./Components/CounterApp";
import SongList from "./Components/SongList";
import SongDisplay from "./Components/SongDisplay";

const App = () => {

  return(
    <div>
      <CounterApp/>
      <div style={{
      display: "flex",
      justifyContent:"space-around"
    }}>
      <SongList/>
      <SongDisplay/>
      </div>
    </div>
  )
}

export default App;