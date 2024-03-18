import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
// import homeBg from "../../assets/home/homeBg.png";
import homeBg from "../../image/main.webp";
import CustomTitle from "@/components/cutom-title";
import CustomButton from "@/components/custom-button";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <Stack sx={style.homeBackground}>
      <Grid container spacing={2}>
        <Grid item lg={8} xs={12}>
          <Container maxWidth="lg">
            <Box sx={{ padding: { xs: "80px 0 20px", md: "200px 0 50px" } }}>
              <CustomTitle
                tertiaryText="Kids Deserve Better"
                textLetterSpacing="10px"
                textFontSize="36px"
                textFontWeight="600"
              />
            </Box>
            <Box>
              <CustomTitle
                primaryText="Children are"
                secondaryText="our most"
                tertiaryText="valuable"
                quaternaryText="resource ."
              />
            </Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "16px", md: "19px" },
                fontWeight: "400px",
                color: "#fff",
                padding: { xs: "50px 0px", md: "50px 0px" },
              }}
            >
              “The charities of life are scattered everywhere, enameling the
              vales of human beings as the flowers paint the meadows. They are
              not the fruit of study, nor the privilege of refinement, but a
              natural instinct.”
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <Link href="/sign-in">
                {" "}
                <CustomButton label="Donate Now" />{" "}
              </Link>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeHeader;

const style = {
  homeBackground: {
    backgroundImage: ` url(${homeBg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
};
