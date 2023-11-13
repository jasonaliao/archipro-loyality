import { Card, Grid, NavBar, FloatingBubble } from "antd-mobile";

import { useNavigate } from "react-router-dom";

import { ScanCodeOutline } from "antd-mobile-icons";

const SCAN_QR_CODE_LINK = "/get-points/qr-scan";

const GetPointOptions = [
  {
    title: "Exclusive Access — Partner Perks with a Scan",
    description:
      "Unlock the privileges of ArchiPro’s elite partner network. Scan QR codes exclusively provided by our partners upon transactions or quotes, and accrue points reserved for our distinguished members",
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
  {
    title: `Check-In to earn points`,
    description: `Explore and check into our clients' showrooms and venues. With every check-in, earn points and get closer to exclusive rewards.`,
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
      <div>
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
