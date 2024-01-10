import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Typography } from "@mui/material";
import plansBg from "../../assets/plans/plansHeadIMg.png";
import React from "react";

const PlansHeader = () => {
  return (
    <Box sx={style.plansBackground}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height:"100vh",
              }}
            >
              <Box sx={style.mainContent}>
                
                <CustomTitle
                  primaryText="PLANS"
                  textFontSize="80px"
                  content="start"
                />

                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: 400,
                    textAlign: "start",
                    padding: { xs: "10px", md: "30px 10px" },
                  }}
                >
                  Do your monthly verification volumes exceed one thousand, or
                  do you require a bespoke solution? We would enjoy hearing from
                  you. Immediately get in contact with us!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlansHeader;

const style = {
  plansBackground: {
    marginTop: "15px",
    backgroundImage: `linear-gradient(86deg, #000 3.04%, rgba(0, 0, 0, 0.71) 20.72%, rgba(0, 0, 0, 0.00) 58.63%) , url(${plansBg.src}) `,
    backgroundSize: "cover",
    width: "100%",
  },
  mainContent: {
    borderRadius: "25px",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
  },
};
