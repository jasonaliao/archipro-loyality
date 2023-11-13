import React, { FC } from "react";
import "./QRScan.css";
import { QrScanner } from "@yudiel/react-qr-scanner";

export const QRScan: FC = () => {
  return (
    <div>
      <div className="wrapper">
        <div>
            
        </div>
        <QrScanner
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
        />
      </div>
    </div>
  );
};
