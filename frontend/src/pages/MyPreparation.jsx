import React from "react";
import Formular from "@components/preparationcomponents/Formular";
import CardUnderstand from "@components/preparationcomponents/CardUnderstand";
import CardForm from "@components/preparationcomponents/CardForm";
import CardBreathing from "@components/preparationcomponents/CardBreathing";
import CardCheckList from "@components/preparationcomponents/CardCheckList";
import CardLeaving from "@components/preparationcomponents/CardLeaving";


export default function MyPreparation() {
  //state array qui contient les éléments d'affichage pour les modules à update en fonction de l'avancée du form
  return (
    <div>
      <div style={{display: "flex",}}>
        <CardUnderstand />
        <CardForm />
        <CardCheckList/>
        <CardBreathing/>
        <CardLeaving/>
      </div>
      <Formular/>
    </div>
  );
}
