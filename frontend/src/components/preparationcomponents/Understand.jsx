import React , { useState, useEffect } from 'react';
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import axios from "axios";

const Understand = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/list_uploads/").then((response) => {
      console.log("response", response);
      setVideos(response.data.files);
    });
   }, []);


    return (
      <Card
        sx={{
          border: "3px solid #F5D23F",
          marginTop: "40px",
          backgroundColor: "#F5F5F5",
          borderRadius: "20px",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: 16,
              display: "flex",
              justifyContent: "start",
              marginBottom: "48px",
            }}
          >
            Les vidéos du Dr Noailles :



          </Typography>
          <div style={{ display: "flex" }}>
            <Box>^$poiuy 
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  alt="Preview de la vidéo"
                  sx={{
                    height: 140,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {videos.map((video) => (
                    <video key={video} controls width="250">
                      <source
                        src={`http://localhost:5000/static/uploads/${video}`}
                        type="video/mp4"
                      />
                    </video>
                  ))}
                </CardMedia>
                <Typography
                  sx={{ mt: 1 }}
                  variant="body2"
                  color="text.secondary"
                >
                  Le déroulé de l&apos;opération.
                </Typography>
                <Typography
                  sx={{ mt: 1, fontSize: 10, mr: "110px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  3 mins
                </Typography>
              </Card>
            </Box>
            
          </div>
        </CardContent>
      </Card>
    );
};

export default Understand;