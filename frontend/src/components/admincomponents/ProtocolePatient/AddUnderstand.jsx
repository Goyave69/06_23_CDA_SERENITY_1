import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AddUnderstand = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);

  const handleUpload = () => {
    console.log("Uploading");
    console.log(file);
    console.log(title);
 
    // if( files.length > 0 & title.length > 0) {

    const formData = new FormData();
    formData.append("name", title);
    formData.append("files", file);

    console.log(formData)

    fetch("http://localhost:5000/upload_files", {
      method: "POST",
      body: formData,
     /* headers: {
        "Content-Type": "multipart/form-data",
      },
      */
    })
      .then((res) => console.log(res))
      .catch((err) => ("Error occured", err));
    /*
  }else{
    alert ("formulaire incorrect")
  }*/
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

            <div class="container">
              <h1>File Upload</h1>

              <div class="input-group">
                <label for="title">Titre de la video</label>
                <input
                  name="title"
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="titre"
                />
              </div>
             <div> <input
                accept=".mp4"
                style={{ display: "block" }}
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
                <label>
                <span>File</span>
              </label>
              </div>
              <Button
                onClick={handleUpload}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: "20px", marginTop: "30px" }}
              >
                Upload
              </Button>

            
            </div>

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
