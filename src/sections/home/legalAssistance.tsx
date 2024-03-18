import React from "react";
// import legalAssistanceImage from "../../assets/home/legalAssistance.png";
import legalAssistanceImage from "../../image/donation1.jpg";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CustomHeading from "@/components/custom-heading";

const buttonArray = [
  {
    label: (
      <span>
        $60M
        <br />
        FUND RAISED
      </span>
    ),
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "transparent",
  },
  {
    label: (
      <span>
        9,200 <br /> COMPLETED PROJECTS
      </span>
    ),
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
  {
    label: (
      <span>
        5,800
        <br />
        DONATION
      </span>
    ),
    border: "1px solid #fff",
    color: "#fff",
    bgColor: "transparent",
  },
  {
    label: (
      <span>
        2,750
        <br /> VOLUNTEER
      </span>
    ),
    border: "1px solid #FEDE4B",
    color: "#18323A",
    bgColor: "#FEDE4B",
  },
];

const LegalAssistance = () => {
  return (
    <Box sx={style.legalAssistanceBackground}>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "20px", md: "100px 0px" } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  padding: "50px 0",
                }}
              >
                GREAT REVIEWS FOR OUR SERVICES
              </Typography>
              <CustomHeading label="Technical Statistics" />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={10} xl={8}>
              <Box sx={style.ButtonLayout}>
                {buttonArray.map((item, i) => (
                  <Button sx={style.button(item)} key={i}>
                    <Typography sx={style.typo}>{item.label}</Typography>
                  </Button>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalAssistance;
const style = {
  legalAssistanceBackground: {
    backgroundImage: `linear-gradient(91deg, #000 -34.34%, #000 -15.32%, rgba(0, 0, 0, 0.45) 53.25%, rgba(0, 0, 0, 0) 72.09%) , url(${legalAssistanceImage.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // width: "100vw",
  },
  ButtonLayout: {
    display: { xs: "flex", sm: "block" },
    alignContent: { xs: "flex-end", sm: "none" },
    justifyContent: { xs: "center", sm: "none" },
    flexWrap: "wrap",
    margin: { xs: "0px", lg: "" },
  },
  button: (item: any) => ({
    background: item.bgColor,
    color: item.color,
    border: item.border,
    height: "64px",
    margin: {
      xs: "5px",
      sm: "10px 10px 10px 0",
      md: "27px 27px 27px 0",
    },
    width: "14rem",
    fontSize: "16px",
    fontWeight: "700 !important",
    borderRadius: "10px",
    gap: "10px",
    textTransform: "capitalize",
    "&:hover": {
      background: item.bgColor,
      color: item.color,
      border: item.border,
    },
  }),
  typo: {
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "20px",
  },
};
