import React, { useState } from "react";
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
import CheckListState from "@components/preparationcomponents/CheckListState";


export default function MyPreparation() {
  //state array qui contient les éléments d'affichage pour les modules à update en fonction de l'avancée du form
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardName) => {
    setSelectedCard(cardName);
  }

  const renderSelectedComponent = () => {
    switch (selectedCard) {
      case 'formular':
        return <Formular/>;
      case 'Understand':
       return <Understand/>;
      case 'breathing':
        return <Breathing/>;
      case 'appointment':
        return <Appointment/>;
      case 'checklist':
        return <CheckListLeaving/>;
      default:
        return null;
    }
  };
  return (
    
    <div>
      <div style={{display: "flex"}}>
        <CardUnderstand onClick={() => handleCardClick('Understand')}/>
        <CardForm onClick={() => handleCardClick('formular')}/>
        <CardCheckList onClick={() => handleCardClick('checklist')}/>
        <CardBreathing onClick={() => handleCardClick('breathing')} />
        <CardLeaving onClick={() => handleCardClick('appointment')}/>
      </div>
      {renderSelectedComponent()}
    </div>
  );
}
