import { Card, Grid, NavBar, FloatingBubble } from "antd-mobile";

import { useNavigate } from "react-router-dom";

import { ScanCodeOutline } from "antd-mobile-icons";

const SCAN_QR_CODE_LINK = "/get-points/qr-scan";

const GetPointOptions = [
  {
    title: `Check-In to earn points`,
    description: `Explore and check into our clients' showrooms and venues. With every check-in, earn points and get closer to exclusive rewards.`,
    link: SCAN_QR_CODE_LINK,
  },
  {
    title: "Complete your profile",
    description:
      "Unlock the full ArchiPro experience by completing your profile. Earn points and get recognized by the community as you enrich your profile with details.",
  },

  {
    title: "Invite a friend",
    description:
      "Invite friends to ArchiPro and earn rewards for every referral. Your network is your net worth; expand it and collect points as they join.",
  },
  {
    title: "Shop Now with ArchiPro",
    description:
      "Transform your space with our curated selections. Earn points with every purchase and bring your vision to life with the best products.",
  },
];

export const GetPoints = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(SCAN_QR_CODE_LINK);
  };

  return (
    <div>
      <NavBar backArrow={false}>Get Points</NavBar>
      <div
        style={{
          padding: "0 8px",
        }}
      >
        <Grid columns={1} gap={8}>
          {GetPointOptions.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              onClick={() => {
                if (!item.link) return;
                navigate(item.link);
              }}
            >
              {item.description}
            </Card>
          ))}
        </Grid>
      </div>
      <FloatingBubble
        style={{
          "--initial-position-bottom": "108px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
          "--size": "64px",
        }}
        onClick={onClick}
      >
        <ScanCodeOutline fontSize={32} />
      </FloatingBubble>
    </div>
  );
};
