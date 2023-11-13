import React, { FC } from "react";

import { NavBar } from "antd-mobile";

import { useNavigate } from "react-router-dom";
import { QRScan } from "../components/qr-scan/QRScan";

export const QRScanView: FC = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  return (
    <div>
      <NavBar onBack={back}>Scan QR Code</NavBar>
      <QRScan />
    </div>
  );
};
