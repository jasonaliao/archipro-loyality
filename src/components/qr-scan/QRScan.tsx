import React, { FC, useState } from "react";
import "./QRScan.css";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import { Popup, Button, Grid } from "antd-mobile";
import { CheckCircleFill } from "antd-mobile-icons";

export const QRScan: FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const onDecode = (result: string) => {
    // do action
    setShowSuccess(true);
  };

  return (
    <div>
      <div className="wrapper">
        <QrScanner
          onDecode={onDecode}
          onError={(error) => console.error(error)}
          containerStyle={{ height: "100%" }}
          
        />
        <Popup
          visible={showSuccess}
          onMaskClick={() => setShowSuccess(false)}
          onClose={() => setShowSuccess(false)}
          bodyStyle={{
            height: "100vh",
            padding: "12px",
            boxSizing: "border-box",
          }}
        >
          <div className="successMaskContent">
            <Grid columns={1} gap={12} className="successMaskContentInner">
              <CheckCircleFill fontSize={96} color="#bea78c" />
              <h2>Success</h2>
              <div>{`Scan succeeded. You will be receive your ArchiPro Point rewards soon.`}</div>
            </Grid>
            <Button
              onClick={() => navigate("/")}
              block
              color="primary"
              size="large"
            >
              Continue
            </Button>
          </div>
        </Popup>
      </div>
    </div>
  );
};
