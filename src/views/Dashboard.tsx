import { Grid, Card } from "antd-mobile";
import { useUserState } from "../context/User";
import { calculateRank, getLabelByRank } from "../utils";
import { useEffect, useRef } from "react";
import { RankDisplay } from "../components/rank-display/RankDisplay";

export const Dashboard = () => {
  const { apPointTotal, rank } = useUserState();
  const previousRankRef = useRef(rank);

  useEffect(() => {
    // Calculate the new rank based on the updated AP points
    const newRank = calculateRank(apPointTotal);

    // Only show the alert if the rank has changed
    if (previousRankRef.current !== newRank) {
      console.log(
        `Congratulations, you have been promoted to ${newRank} rank!`,
        previousRankRef.current,
        newRank
      );
      // Update the previous rank ref to the new rank
      previousRankRef.current = newRank;
    }
  }, [apPointTotal]); // Depend on apPointTotal instead of rank to trigger this effect

  return (
    <>
      <div
        style={{
          padding: "8px",
        }}
      >
        <RankDisplay />
      </div>
      <Grid columns={1} gap={16}>
        <Card>
        some amazing design content goes here
        </Card>
      </Grid>
    </>
  );
};
