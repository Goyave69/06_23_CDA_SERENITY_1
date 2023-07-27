import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import CheckListState from "./CheckListState";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Card from "@mui/material/Card";
import { useProgress } from "../../context/ProgressContext";

const Container = styled(Box)`
  background-color: #f5f5f5;
  padding: 20px;
  min-height: 100vh;
  border-radius: 10px;
`;

const Encart = styled(Box)`
  background-color: #e8e3fc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const EmptySpace = styled(Box)`
  height: 100px;
`;

const CheckListLeaving = () => {
  const [checkedCount, setCheckedCount] = useState(0); 
  
  const { setProgress } = useProgress();

  const handleCheckChange = (isChecked) => {
    setCheckedCount((prevCount) => (isChecked ? prevCount + 1 : prevCount - 1));
    const totalCount = 7;
    const newProgress = (checkedCount / totalCount) * 100;
    setProgress(newProgress);
  };

  return (
    <Card
      sx={{
        backgroundColor: "#F5F5F5",
        marginTop: "40px",
        borderRadius: "20px",
        border: "3px solid #8D77F0",
      }}
    >
      <Container>
        {/*     <ContentContainer> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* Contenu de la colonne 1 */}

            <FormControl component="fieldset">
              <FormHelperText
                sx={{
                  fontSize: 16,
                  marginBottom: "48px",
                  fontWeight: "medium",
                }}
              >
                Ma checklist avant de quitter la maison
              </FormHelperText>
              <Encart>
                <CheckListState
                  label1="Pièce d' Identité"
                  label2="Obligatoire"
                  onCheckChange={handleCheckChange}
                />
              </Encart>
              <Encart>
                <CheckListState label1="Carte Bleue" label2="Facultatif" />
              </Encart>
              <Encart>
                <CheckListState label1="Accord Mutuelle" label2="Obligatoire" />
              </Encart>
              <Encart>
                <CheckListState label1="RDV Anesthésie" label2="Obligatoire" />
              </Encart>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* Contenu de la colonne 2 */}
            <FormControl component="fieldset">
              <EmptySpace />
              <Encart>
                <CheckListState
                  label1="Test COVID"
                  label2="Moins de 3 jours"
                  label3={<ChevronRightIcon />}
                  onCheckChange={handleCheckChange}
                />
              </Encart>
              <Encart>
                <CheckListState
                  label1="Vaccin GRIPPE"
                  label2="A faire"
                  label3={<ChevronRightIcon />}
                  onCheckChange={handleCheckChange}
                />
              </Encart>
              <Encart>
                <CheckListState
                  label1="Consentement"
                  label2="Obligatoire"
                  label3={<ChevronRightIcon />}
                  onCheckChange={handleCheckChange}
                />
              </Encart>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} xxl={4}>
            {/* Contenu de la colonne 3 */}
            <FormControl component="fieldset">
              {/* je laisse une colonne vide pour aligner sur la droite cf maquette  */}
            </FormControl>
          </Grid>
        </Grid>
        {/*   </ContentContainer> */}
      </Container>
    </Card>
  );
};

export default CheckListLeaving;
