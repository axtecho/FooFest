import { useState, useEffect } from "react";

import generalStyles from "../sass/modules/_General.module.scss";

import { Link, Routes, Route } from "react-router-dom";
import Festival from "./roots/Festival";
import Booking from "./roots/Booking";
import Program from "./roots/Program";
import Bands from "./roots/Bands";
import Profile from "./roots/Profile";
// These are for the react-reroute

function App() {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const values = {
    user,
    setUser,
    isLoading,
    setIsLoading,
    favourites,
    setFavourites,
  };

  return (
    <div className={generalStyles.App}>
      <Routes>
        <Route path="/" element={<Festival {...values} />} />
        <Route path="/tickets" element={<Booking {...values} />} />
        <Route path="/program" element={<Program {...values} />} />
        <Route path="/artists" element={<Bands {...values} />} />
        <Route path="/profile" element={<Profile {...values} />} />
      </Routes>
    </div>
  );
}

export default App;
