import { Grid } from "antd-mobile";
import { useUserState } from "../context/User";
import { calculateRank, getLabelByRank } from "../utils";
import { useEffect, useRef } from "react";

export const Dashboard = () => {
  const { firstName, apPointTotal, rank } = useUserState();
  const previousRankRef = useRef(rank); 

  useEffect(() => {
    // Calculate the new rank based on the updated AP points
    const newRank = calculateRank(apPointTotal);

    // Only show the alert if the rank has changed
    if (previousRankRef.current !== newRank) {
      console.log(`Congratulations, you have been promoted to ${newRank} rank!`, previousRankRef.current, newRank);
      // Update the previous rank ref to the new rank
      previousRankRef.current = newRank;
    }
  }, [apPointTotal]); // Depend on apPointTotal instead of rank to trigger this effect

  
  return (
    <div
      style={{
        padding: "8px",
      }}
    >
      <div>{`Good afternoon ${firstName}`}</div>
      <div>{getLabelByRank(rank)}</div>
      <div>{apPointTotal}</div>
      <Grid columns={1} gap={8}></Grid>
    </div>
  );
};
