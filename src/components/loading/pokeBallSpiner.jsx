import React from "react";
import pokeball from "../../assets/pokeball.svg";
import "./loading.css";

export const PokeLoading = () => (
  <div className="poke-loading-container">
    <img src={pokeball} className="poke-loading" alt="Loadind..." />
    <span>Loadind...</span>
  </div>
);
