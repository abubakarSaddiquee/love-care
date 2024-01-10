import { Box, Typography } from "@mui/material";
import React from "react";
import './style.scss';

const UnderConstruction = () => {
  return (
    <Box sx={style.container}>
      <div className="spinner-wrap">
        <div className="spinner-item"></div>
        <div className="spinner-item spinner-item--2"></div>
        <div className="spinner-item spinner-item--3"></div>
      </div>
      <Box sx={style.box}>
        <Typography
          sx={{
            fontSize: { xs: "24px", sm: "48px" },
            margin: "30px 0",
            color: "#FEDE4B",
            textAlign:"center"
          }}
        >
          Exciting news – our website is getting a makeover! 🛠️{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "22px",
              width: { xs: "auto", md: "800px" },
              textAlign: "center",
            }}
          >
            Thanks a bunch for reaching out to us. We’ve got your info and we’re
            thrilled to connect with you soon! Our friendly representative will
            be in touch with all the awesome details and information you need.{" "}
          </Typography>
          <Typography sx={{ margin: "30px 0", fontSize: "22px" }}>
            Hang tight and talk to you real soon! 🚀
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UnderConstruction;

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    position: 'relative'
  },

  box: {
   
    padding: "20px",
    backgroundColor: "#red",
  },
  
  
};
