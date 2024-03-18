import React, { FC } from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// import homeLeftSide from "../../assets/home/homeLeftSide.png";
import homeLeftSide from "../../image/image1.jpg";
import Image from "next/image";
import CustomHeading from "@/components/custom-heading";
import JoinUs from "@/components/join-us/joinUs";
import CustomTitle from "@/components/cutom-title";

const ManagementSystem: FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: { xs: "30px", lg: "50px" },
                }}
              >
                <Image
                  src={homeLeftSide}
                  width={580}
                  height={586}
                  layout="responsive"
                  alt="image"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  mt: 6,
                  height: { xs: "50vh", sm: "30vh", md: "30vh", lg: "80vh" },
                }}
              >
                <CustomHeading label="WELCOME TO Kids Deserve Better CHARITY" />

                <CustomTitle
                  tertiaryText="We Help Thousands of Children to Get Their Education"
                  textLetterSpacing="10px"
                  textFontSize="36px"
                  textFontWeight="600"
                />

                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "14", md: "16px" },
                    fontWeight: 500,
                    padding: { xs: "30px 10px 0 0", md: "30px 100px 0 0" },
                  }}
                >
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted
                  parts of sentences fly into your mouth.
                </Typography>
                <Box sx={{ mt: 6 }}>
                  <CustomHeading label="Let God Lead You To Be Of Help To Others." />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <JoinUs text="You Can Make Their Wishes Come True." />
    </>
  );
};

export default ManagementSystem;
