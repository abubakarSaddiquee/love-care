import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import advantageBg from "../../assets/home/advantageBg.png";
import CustomTitle from "@/components/cutom-title";
import CustomCard from "@/components/custom-card";
import CustomHeading from "@/components/custom-heading";
import CustomButton from "@/components/custom-button";

const cardArray = [
  {
    title: "Achieve Your Goals",
    desc: `Start getting help on a project basis, and free up time so you can focus on reaching your career or practice goals without legal
recruiters`,
  },
  {
    title: "Control and Flexibility",
    desc: `Posting legal projects gives your practice the control and flexibility of temporary law firm hiring, without the additional hassle, risk, and expense of legal recruiters`,
  },
  {
    title: "Local or Remote Help",
    desc: `Available all over UK, you can find help locally or in any jurisdiction across the UK. Work with Lawyers in your office or online`,
  },
];

const Advantage = () => {
  return (
    <Box sx={style.advantageBackground}>
      <Container maxWidth="xl">
        <Box sx={{ padding: { xs: "30px 0", md: "200px 0" } }}>
          <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
            <CustomHeading label="Kids Deserve Better CHARITY" />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: { xs: "30px", md: "0px" },
            }}
          >
            <CustomTitle
              primaryText="The Smallest Act of Kindness is"
              secondaryText=" Worth More Than"
              tertiaryText=" the Grandest Intention"
              textFontSize="40px"
            />
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 5 }}
          >
            <CustomButton label="Donate Now" />
            <CustomButton label="Become A volunteer" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Advantage;
const style = {
  advantageBackground: {
    backgroundImage: `url(${advantageBg.src})`,
    backgroundSize: "cover",
  },
};
