import React, { FC } from "react";

import { TabBar, SafeArea } from "antd-mobile";

import {
  AppOutline,
  ScanCodeOutline,
  UserOutline,
  GiftOutline,
} from "antd-mobile-icons";

import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

export const BottomNav: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/",
      title: "Dashboard",
      icon: <AppOutline />,
    },
    {
      key: "/get-points",
      title: "Earn Points",
      icon: <ScanCodeOutline />,
    },
    {
      key: "/benefits",
      title: "Benefits",
      icon: <GiftOutline />,
    },
    {
      key: "/my-account",
      title: "My Account",
      icon: <UserOutline />,
    },
  ];

  return (
    <div className="bottomNavWrapper">
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
      <SafeArea position="bottom" />
    </div>
  );
};
