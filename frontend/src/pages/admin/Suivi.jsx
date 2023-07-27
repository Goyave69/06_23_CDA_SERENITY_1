import React, { useState } from "react";
import CardProtocole from "@components/admincomponents/ProtocolePatient/CardProtocole";
import AddUnderstand from "@components/admincomponents/ProtocolePatient/AddUnderstand";
import AddAppointment from "@components/admincomponents/ProtocolePatient/AddAppointment";
import AddFormular from "@components/admincomponents/ProtocolePatient/AddFormular";
import AddChecklist from "@components/admincomponents/ProtocolePatient/AddChecklist";

const Suivi = () => {
  const [selectedProt, setSelectedProt] = useState(null);

  const handleComponentClick = (cardProt) => {
    setSelectedProt(cardProt);
  };

  const renderSelectedComponent = () => {
    switch (selectedProt) {
      case "understand":
        return <AddUnderstand />;
      case "appointment":
        return <AddAppointment />;
      case "formular":
        return <AddFormular />;
      case "checklist":
        return <AddChecklist />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <CardProtocole handleClick={handleComponentClick} />
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default Suivi;
