import uniqid from "uniqid";
import BigImpact from "../assets/big-impactwav.mp3";
import Creepy from "../assets/creepy-hifreq-wooshwav.mp3";
import EpicLogo from "../assets/epic-logo.mp3";
import HarpTransition from "../assets/harp-transition-music-cue.mp3";
import HeavyBeam from "../assets/heavy-beam-weapon.mp3";
import ImpactRiser from "../assets/impact-riser-01.mp3";
import RockSmash from "../assets/rock-smash.mp3";
import TimpaniRoll from "../assets/timpani-roll-kevinsticksaif.mp3";
import WindChime from "../assets/windchime1wav.mp3";

export const PadContents = [
  {
    id: uniqid(),
    key: "Q",
    audio: BigImpact,
    name: "Big Impact",
  },
  {
    id: uniqid(),
    key: "W",
    audio: Creepy,
    name: "Creepy Hifreq Woosh",
  },
  {
    id: uniqid(),
    key: "E",
    audio: EpicLogo,
    name: "Epic Logo",
  },
  {
    id: uniqid(),
    key: "A",
    audio: HarpTransition,
    name: "Harp Transition",
  },
  {
    id: uniqid(),
    key: "S",
    audio: HeavyBeam,
    name: "Heavy Beam weapon",
  },
  {
    id: uniqid(),
    key: "D",
    audio: ImpactRiser,
    name: "Impact Riser",
  },
  {
    id: uniqid(),
    key: "Z",
    audio: RockSmash,
    name: "Rock Smash",
  },
  {
    id: uniqid(),
    key: "X",
    audio: TimpaniRoll,
    name: "Timpani Roll",
  },
  {
    id: uniqid(),
    key: "C",
    audio: WindChime,
    name: "Wind Chime",
  },
];
