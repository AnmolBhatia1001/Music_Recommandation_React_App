import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [btnvalue, setbtnvalue] = useState("");

  var HipHop = [
    {
      artist: "Bella",
      song: "Cole"
    },
    {
      artist: "Bella",
      song: "Monster"
    }
  ];

  var Lofi = [
    {
      artist: "WORMONO",
      song: "Tum Se Hi"
    },
    {
      artist: "WORMONO",
      song: "Kun Faya Kun"
    }
  ];

  var Sad = [
    {
      artist: "Akon",
      song: "Lonely"
    },
    {
      artist: "Tai Verdes",
      song: "Last Day On Earth"
    }
  ];

  function HipHophandler(event) {
    var data = HipHop.map((element) => {
      return (
        <ul>
          <li>Artist : {element.artist}</li>
          <li>Track : {element.song}</li>
        </ul>
      );
    });

    setbtnvalue(data);
  }

  function Lofihandler(event) {
    var data = Lofi.map((element) => {
      return (
        <ul>
          <li>Artist : {element.artist}</li>
          <li>Track : {element.song}</li>
        </ul>
      );
    });

    setbtnvalue(data);
  }

  function Sadhandler(event) {
    var data = Sad.map((element) => {
      return (
        <ul>
          <li>Artist : {element.artist}</li>
          <li>Track : {element.song}</li>
        </ul>
      );
    });

    setbtnvalue(data);
  }

  return (
    <div className="App">
      <h1>Music Recommandation App</h1>

      <div id="btn-Container">
        <button value="HipHop" onClick={(event) => HipHophandler(event)}>
          HipHop
        </button>

        <button value="Lofi" onClick={(event) => Lofihandler(event)}>
          Lofi
        </button>

        <button value="Sad" onClick={(event) => Sadhandler(event)}>
          Sad
        </button>
      </div>

      <div>{btnvalue}</div>
    </div>
  );
}
