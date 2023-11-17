import { Button, Card } from "antd-mobile";
import { useUserState } from "../../context/User";
import { getLabelByRank } from "../../utils";
import { useNavigate } from "react-router-dom";
import "./RankDisplay.css";

export const RankDisplay: React.FC = () => {
  const navigate = useNavigate();
  const { firstName, lastName, apPointTotal, rank } = useUserState();

  return (
    
    <div
      style={{
        padding: "8px",
      }}
    >
      <div className="card">
        <div className="card-header">
          <h1>Good afternoon!</h1>
          <div className="member-status">
            <p>{`${firstName} ${lastName}`}</p>
            <span>{`${getLabelByRank(rank)} Member`}</span>
          </div>
        </div>
        <div className="points">
          <span>{`${apPointTotal} points`}</span>
          <Button
            onClick={() => navigate("/get-points")}
            color="default"
            size="small"
          >{`Earn Points`}</Button>
        </div>
      </div>
    </div>
  );
};
