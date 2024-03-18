import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
// import priceBg from "../../assets/home/pricingBg.png";
import priceBg from "../../image/unity.jpg";
import CustomTitle from "@/components/cutom-title";
import checkIcon from "../../assets/home/checkIcon.png";
import Image from "next/image";
import CustomButton from "@/components/custom-button";

const checkArray = [
  "No Hidden fee",
  "No Commitments",
  "No Menbership Fees",
  "No Long-Term Contracts",
];

const Pricing = () => {
  return (
    <Box sx={style.pricingBg}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={8} xl={8}>
            <Box sx={{ margin: { xs: "20, 0", md: "50px 0" } }}>
              <Box sx={{ padding: "20px 0" }}>
                <CustomTitle
                  tertiaryText="Become A Volunteer"
                  textFontSize="40px"
                  content="start"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "50px",
                }}
              >
                <CustomButton label="Become A volunteer" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={4} xl={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                padding: { xs: "20px 0", md: "0" },
              }}
            >
              <Box sx={style.pricingCard}>
                <Box sx={{ padding: { xs: "20px 10px", sm: "50px" } }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "30px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    Joining US
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "37px",
                      fontWeight: "800",
                      lineHeight: "48px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    Do You Care Our Children?
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "24px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "700",
                      lineHeight: "24px",
                      color: "#18323A",
                      padding: "10px 0",
                    }}
                  >
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
const style = {
  pricingBg: {
    backgroundImage: ` url(${priceBg.src}) `,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "",
  },
  checkText: {
    fontWeight: 700,
    fontSize: "18px",
  },
  pricingCard: {
    marginTop: "50px",
    backgroundColor: "#FEDE4B",
    borderRadius: "25px",
  },
};
