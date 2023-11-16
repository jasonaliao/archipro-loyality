import { Card, Grid, NavBar, FloatingBubble } from "antd-mobile";
import { useUser } from "../context/User";

export const Dashboard = () => {
  const { firstName, apPointTotal, rank} = useUser();
  return (
    <div
      style={{
        padding: "8px",
      }}
    >
      <div>{`Good afternoon ${firstName}`}</div>
      <div>{rank}</div>
      <div>{apPointTotal}</div>
      <Grid columns={1} gap={8}></Grid>
    </div>
  );
};
