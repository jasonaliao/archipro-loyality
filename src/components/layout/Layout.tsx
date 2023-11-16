// Layout.tsx
import React, { ReactNode, useState, useEffect } from "react";
import "./Layout.css";
import { BottomNav } from "../navbar/BottomNav";
import { SplashScreen } from "../splash/SplashScreen";
import { SafeArea } from "antd-mobile";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="base">
      <div className="layout">
        <SafeArea position="top" />
        {loading ? (
          <SplashScreen />
        ) : (
          <>
            <div className="page-content">{children}</div>
            <nav className="bottom-nav">
              <BottomNav />
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

export default Layout;
