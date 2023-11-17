import { Grid } from "antd-mobile";
import { useEffect, useRef } from "react";
import { UserRank } from "../../types/UserRank";

interface RankDisplayProps {
    rank: UserRank;
    apPointTotal: number;
}

export const RankDisplay: React.FC<RankDisplayProps> = ({ rank, apPointTotal }) => {
  
  
  return (
    <div
      style={{
        padding: "8px",
      }}
    >
     
    </div>
  );
};
