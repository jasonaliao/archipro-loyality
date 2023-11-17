import React, { FC } from "react";
import "./BenefitCard.css";
//import { useNavigate } from "react-router-dom";
import { Card } from "antd-mobile";
import { UserRank } from "../../types/UserRank";
import { useUserState } from "../../context/User";
import { getLabelByRank } from "../../utils";

interface BenefitCardProps {
  imageSrc: string;
  title: string;
  content: string;
  link: string;
  rank?: UserRank;
}

export const BenefitCard: FC<BenefitCardProps> = ({
  imageSrc,
  content,
  link,
  title,
  rank = 1,
}) => {
  const user = useUserState();

  const canUse = user.rank >= rank;

  return (
    <Card
      className={`benefitCard ${canUse ? "" : "disabled"} `}
      onClick={() => {
        //navigate(link);
      }}
    >
      <div className="benefitCardInner">
        <div className="benefitCardImage">
          <img src={imageSrc} alt={title} width={120} />
          {canUse ? null : <div className="disabledMask">{`${getLabelByRank(rank)}`}<br></br>to Unlock</div>}
        </div>
        <div className="benefitCardContent">
          <h4>{title}</h4>
          <span>{content}</span>
        </div>
      </div>
    </Card>
  );
};
