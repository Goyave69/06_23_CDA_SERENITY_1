import React, { useState } from "react";
import Formular from "@components/preparationcomponents/Formular";
import CardUnderstand from "@components/preparationcomponents/CardUnderstand";
import CardForm from "@components/preparationcomponents/CardForm";
import CardBreathing from "@components/preparationcomponents/CardBreathing";
import CardCheckList from "@components/preparationcomponents/CardCheckList";
import CardLeaving from "@components/preparationcomponents/CardLeaving";
import Breathing from "@components/preparationcomponents/Breathing";
import Understand from "@components/preparationcomponents/Understand";


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
      default:
        return null;
    }
  };
  return (
    
    <div>
      <div style={{display: "flex"}}>
        <CardUnderstand onClick={() => handleCardClick('Understand')}/>
        <CardForm onClick={() => handleCardClick('formular')}/>
        <CardCheckList/>
        <CardBreathing onClick={() => handleCardClick('breathing')} />
        <CardLeaving/>
      </div>
      {renderSelectedComponent()}
    </div>
  );
}
