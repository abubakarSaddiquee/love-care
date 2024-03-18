import CustomCard from "@/components/custom-card";
import CustomTitle from "@/components/cutom-title";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const cardArray = [
  {
    title: "Education Equality",
    desc: `Empowering Children Through Education`,
  },
  {
    title: <span>Healthcare Access</span>,
    desc: `Ensuring Healthy Futures for Needy Kids`,
  },
  {
    title: "Safe Environments",
    desc: `Providing Secure Spaces for Children in Need`,
  },
  {
    title: "PEAK/SEASONAL NEEDS",
    desc: `Easily grow or shrink your team with elasticity
that has never existed in the profession`,
  },
  {
    title: <span>Empowering Girls</span>,
    desc: `Supporting Gender Equality from Childhood`,
  },
  {
    title: "Sports and Recreation",
    desc: `Promoting Active Lifestyles for Kids in Need`,
  },
  {
    title: "Mental Health Support",
    desc: `Nurturing Emotional Well-being in Vulnerable Children`,
  },
];

const PostProject = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ padding: "20px 0" }}>
        <Box>
          <CustomTitle
            primaryText="Our Causes"
            secondaryText="&"
            tertiaryText="Help Us"
            textFontSize="40px"
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "25.71px",
              textAlign: "center",
              padding: { xs: "20px 0", md: "30px 20px" },
            }}
          >
            At Kids Deserve Better, we believe in the potential of every child,
            regardless of their circumstances. Our mission is to provide a
            brighter future for needy children through initiatives that focus on
            education, healthcare, nutrition, and creating safe environments. We
            strive to empower young minds, ensuring they have equal
            opportunities to thrive and succeed. With your support, we can make
            a tangible difference in the lives of these deserving children,
            offering them the chance to fulfill their dreams and reach their
            full potential.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {cardArray.map((item, i) => (
            <Grid xs={12} sm={6} lg={4} item key={i}>
              <Box sx={{ padding: { xs: "10px", md: "20px 0px 10px" } }}>
                <CustomCard
                  title={item.title}
                  description={item.desc}
                  height="220px"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PostProject;
