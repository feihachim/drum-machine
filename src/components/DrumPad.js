import "../styles/DrumPad.css";

function DrumPad({ content, setAudio }) {
  let audioElement;
  function playTune() {
    audioElement = document.querySelector("#" + content.key);
    setAudio(content.name);
    audioElement.play();
  }
  function handleClick(e) {
    playTune();
  }
  function handleKeydown(e) {
    if (String.fromCharCode(e.keyCode) === content.key) {
      playTune();
    }
  }
  return (
    <div
      className="drum-pad"
      id={content.id}
      onClick={handleClick}
      onKeyDown={handleKeydown}
    >
      <p>{content.key}</p>
      <audio id={content.key} className="clip" src={content.audio}></audio>
    </div>
  );
}

export default DrumPad;
