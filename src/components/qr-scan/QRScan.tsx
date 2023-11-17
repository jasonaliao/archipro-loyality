import React, { FC, useState } from "react";
import "./QRScan.css";
import { QrScanner } from "@yudiel/react-qr-scanner";
import { useNavigate } from "react-router-dom";
import { Popup, Button, Grid } from "antd-mobile";
import { CheckCircleFill } from "antd-mobile-icons";
import { useUserDispatch } from "../../context/User";

interface DecodeResult {
  data: {
    professional: {
      id: number;
      title: string;
    };
  };
}

export const QRScan: FC = () => {
  const [decodeResult, setDecodeResult] = useState<DecodeResult | null>(null);
  const navigate = useNavigate();
  const dispatch = useUserDispatch();

  const onDecode = (result: string) => {
    // do action
    setDecodeResult({ data: { professional: { id: 1, title: "FORTE" } } });
  };

  const onCheckIn = (callBackUrl:string) => {
    dispatch({ type: "add-points", payload: 10 });
    navigate(callBackUrl);
  }

  return (
    <div>
      <div className="wrapper">
        <QrScanner
          onDecode={onDecode}
          onError={(error) => console.log(error)}
          containerStyle={{ height: "100%" }}
        />
        <Popup
          visible={!!decodeResult}
          onMaskClick={() => setDecodeResult(null)}
          onClose={() => setDecodeResult(null)}
          bodyStyle={{
            height: "100vh",
            padding: "12px",
            boxSizing: "border-box",
          }}
        >
          <div className="successMaskContent">
            <Grid columns={1} gap={12} className="successMaskContentInner">
              <CheckCircleFill fontSize={96} color="#bea78c" />
              <div>{`You are about to check in to`}</div>
              <h2>{decodeResult?.data.professional.title}</h2>
            </Grid>
            <Button
              onClick={() => onCheckIn("/")}
              block
              color="primary"
              size="large"
            >
              Check In
            </Button>
          </div>
        </Popup>
      </div>
    </div>
  );
};
