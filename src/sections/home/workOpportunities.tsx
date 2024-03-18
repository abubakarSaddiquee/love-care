import React from "react";
import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Stack } from "@mui/material";
import CustomCard from "@/components/custom-card";
import joinIcon from "../../assets/home/join.svg";
import reiewIcon from "../../assets/home/review.svg";
import selectIcon from "../../assets/home/select.svg";
import payIcon from "../../assets/home/pay.svg";

const cardList = [
  {
    icon: joinIcon,
    title: "Food",
    desc: `“Food is national security. Food is economy. It is employment, energy, history. Food is everything.”`,
  },
  {
    icon: reiewIcon,
    title: "Education",
    desc: `"Education is not a privilege, it's a right for every child!"`,
  },
  {
    icon: selectIcon,
    title: "Health",
    desc: `Living a healthy lifestyle will only deprive you of poor health, lethargy, and fat.`,
  },
  {
    icon: payIcon,
    title: "For Better future",
    desc: `Empower Dreams, Transform Lives: Investing in Needy Children for a Brighter Tomorrow!`,
  },
];

const WorkOpportunities = () => {
  return (
    <Container maxWidth="xl">
      <Stack sx={{ padding: "20px" }}>
        <Box sx={{ padding: { xs: "0", md: "20px" } }}>
          <CustomTitle
            primaryText="Help"
            secondaryText="Ours"
            tertiaryText="Children To"
          />
        </Box>
        <Grid container columnSpacing={5} rowSpacing={0}>
          {cardList.map((item, i) => (
            <Grid xs={12} sm={6} lg={3} item key={i}>
              <Box sx={{ padding: { xs: "10px 0px", md: "20px 0px" } }}>
                <CustomCard
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

export default WorkOpportunities;
