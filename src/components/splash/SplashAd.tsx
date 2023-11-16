// Layout.tsx
import React from "react";
import "./SplashScreen.css";

export interface SplashAdProps {
    title: string;
    description?: string;
    imageUrl: string;
}

export const SplashAd: React.FC<SplashAdProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="splashScreen">
        <img src={imageUrl} className="splashAdImage" alt={title}/>
        <div className="splashAdInner">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    </div>
  );
};

