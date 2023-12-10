import { useState } from "react";
import Character from "./Character";

export default function Episodes({ episode }) {
  return (
    <div className="character">
      <h2 className="name">{episode.name}</h2>
      <p className="episode">{episode.episode}</p>
      <p className="air-date">{episode.air_date}</p>
    </div>
  );
}
