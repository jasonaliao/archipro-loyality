import React, { FC } from "react";
import "./BenefitCard.css";
//import { useNavigate } from "react-router-dom";
import { Card } from "antd-mobile";

interface BenefitCardProps {
  imageSrc: string;
  title: string;
  content: string;
  link: string;
}

export const BenefitCard: FC<BenefitCardProps> = ({
  imageSrc,
  content,
  link,
  title,
}) => {
  //const navigate = useNavigate();

  return (
    <Card
      className="benefitCard"
      onClick={() => {
        //navigate(link);
      }}
    >
      <div className="benefitCardInner">
        <div className="benefitCardImage">
          <img src={imageSrc} alt={title} width={120} />
        </div>
        <div className="benefitCardContent">
            <h4>{title}</h4>
            <span>{content}</span>
        </div>
      </div>
    </Card>
  );
};