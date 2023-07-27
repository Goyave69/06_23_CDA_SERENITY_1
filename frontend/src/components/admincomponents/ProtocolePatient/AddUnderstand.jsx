import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  p: 4,
  boxShadow: "2",
  borderRadius: "10px",
  width: "auto",
};

const AddUnderstand = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file && title) {
      // Check si les deux ne sont pas vide
      const formData = new FormData();
      formData.append("name", title);
      formData.append("files", file);

      fetch("http://localhost:5000/upload_files", {
        method: "POST",
        body: formData,
      }).catch((err) => console.error("Error", err));
    } else {
      alert("Formulaire incorrect");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        mt: 6,
      }}
    >
      <Card
        sx={{
          boxShadow: "2",
          borderRadius: "10px",
          mt: 5,
          width: "auto",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              backgroundColor: "#F3D03D",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "medium",
                color: "white",
                mt: 2,
                mr: 25,
                ml: 2,
              }}
            >
              Comprendre mon operation
            </Typography>
            <div style={{ color: "white" }}>
              <p>10</p>
            </div>
          </Box>

          <div style={{ display: "flex", justifyContent: "column" }}>
            <Grid
              sx={{
                mt: 4,
                borderRadius: "10px",
                backgroundColor: "#F3D03D",
                width: "130px",
                height: "120px",
                padding: "20px",
              }}
            ></Grid>

            <Button
              onClick={handleOpen}
              variant="contained"
              sx={{
                mt: 4,
                borderRadius: "10px",
                backgroundColor: "#F5F5F5",
                boxShadow: "none",
                width: "130px",
                height: "120px",
                padding: "20px",
                ml: 4,
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <Typography sx={{ color: "#696A70", fontSize: "11px" }}>
                Ajouter
              </Typography>
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Container maxWidth="sm">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: "10px",
                      backgroundColor: "#F3D03D",
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "medium",
                        color: "white",
                        mt: 2,
                        mb: 2,
                        mr: 25,
                        ml: 2,
                      }}
                    >
                      Comprendre mon operation
                    </Typography>
                  </Box>

                  <div>
                    <input
                      accept=".mp4"
                      style={{ display: "none" }}
                      type="file"
                      onChange={handleFileChange}
                      id="fileInput"
                    />
                    <label htmlFor="fileInput">
                      <Button
                        variant="outlined"
                        component="span"
                        fullWidth
                        sx={{ borderRadius: "5px", marginTop: "10px" }}
                      >
                        Upload video
                      </Button>
                    </label>
                  </div>

                  <div>
                    <TextField
                      label="Titre"
                      variant="outlined"
                      name="title"
                      value={title}
                      onChange={handleTitleChange}
                      placeholder="titre"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      fullWidth
                      id="outlined-multiline-static"
                      label="Déscription courte"
                      multiline
                      rows={4}
                    />
                  </div>

                  <Button
                    onClick={handleUpload}
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      borderRadius: "10px",
                      marginTop: "20px",
                      backgroundColor: "#343435",
                      height: "45px",
                      width: "35%",
                    }}
                  >
                    Crée
                  </Button>
                </Container>
              </Box>
            </Modal>

            <Button
              variant="contained"
              sx={{
                mt: 4,
                borderRadius: "10px",
                backgroundColor: "#F5F5F5",
                boxShadow: "none",
                width: "130px",
                height: "120px",
                padding: "20px",
                ml: 4,
                "&:hover": {
                  backgroundColor: "#F5F5F5",
                },
              }}
            >
              <Typography sx={{ color: "#696A70", fontSize: "11px" }}>
                {" "}
                Ajouter{" "}
              </Typography>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddUnderstand;
