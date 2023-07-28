import React, { useEffect, useState } from "react";
import Formular from "@components/preparationcomponents/Formular";
import CardUnderstand from "@components/preparationcomponents/CardUnderstand";
import CardForm from "@components/preparationcomponents/CardForm";
import CardBreathing from "@components/preparationcomponents/CardBreathing";
import CardCheckList from "@components/preparationcomponents/CardCheckList";
import CardLeaving from "@components/preparationcomponents/CardLeaving";
import Breathing from "@components/preparationcomponents/Breathing";
import Understand from "@components/preparationcomponents/Understand";
import Appointment from "@components/preparationcomponents/Appointment";
import CheckListLeaving from "@components/preparationcomponents/CheckListLeaving";
//import CheckListState from "@components/preparationcomponents/CheckListState";
import { useProgress } from "../context/ProgressContext";

export default function MyPreparation() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  };

  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartStopAnimation = () => {
    setIsAnimating((prevIsAnimating) => !prevIsAnimating);
  };

  const { progress } = useProgress();
 

  const renderSelectedComponent = () => {
    switch (selectedCard) {
      case "formular":
        return <Formular />;
      case "Understand":
        return <Understand />;
      case "breathing":
        return <Breathing onStartStopAnimation={handleStartStopAnimation} />;
      case "appointment":
        return <Appointment />;
      case "checklist":
        return <CheckListLeaving />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <CardUnderstand onClick={() => handleCardClick("Understand")} />
        <CardForm onClick={() => handleCardClick("formular")} progress={progress} />
        <CardCheckList onClick={() => handleCardClick("checklist")} progress={progress} />
        <CardBreathing onClick={() => handleCardClick("breathing")} isAnimating={isAnimating} />
        <CardLeaving onClick={() => handleCardClick("appointment")} />
      </div>
      {renderSelectedComponent()}
    </div>
  );
}
