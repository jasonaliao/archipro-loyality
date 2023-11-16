import React from "react";
import "./SplashScreen.css";
import logo from "./logo192.png";
import { SplashAd } from "./SplashAd";
import type { SplashAdProps } from "./SplashAd";

const splashAds: SplashAdProps[] = [
  // {
  //   title: `WEAVE HOME SUFFOLK RUG`,
  //   description: ``,
  //   image: `/assets/images/splashAd.avif`,
  // }
];

export const SplashScreen: React.FC = () => {
  if (splashAds.length > 0) {
    const ad = splashAds[0];
    return <SplashAd {...ad} />;
  }

  return (
    <div className="splashScreen">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
