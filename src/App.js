import React from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { useState } from "react";


const App = () =>{
  const themeHook = useState("light")

  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header></Header>
        <HeroSection></HeroSection>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
