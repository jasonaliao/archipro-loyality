// Layout.tsx
import React, { ReactNode } from "react";
import "./SplashScreen.css";
import logo from './logo192.png';


export const SplashScreen: React.FC = () => {
  return (
    <div className="splashScreen">
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

