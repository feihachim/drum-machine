import "../styles/App.css";
import { useState } from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";
import { PadContents } from "../datas/PadContents";

function App() {
  const [audioClip, updateAudioClip] = useState("");
  return (
    <div className="App">
      <div id="drum-machine">
        <div className="drum-pad-container">
          <DrumPad content={PadContents[0]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[1]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[2]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[3]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[4]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[5]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[6]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[7]} setAudio={updateAudioClip} />
          <DrumPad content={PadContents[8]} setAudio={updateAudioClip} />
        </div>
        <Display audio={audioClip} />
      </div>
    </div>
  );
}

export default App;
