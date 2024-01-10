import CustomCard from "@/components/custom-card";
import CustomHeading from "@/components/custom-heading";
import { Box, Grid } from "@mui/material";
import React from "react";

const cardData = [
  {
    disc: (
      <Box>
        &ldquo;Built-in Online Payments <br /> That make it easy for clients{" "}
        <br /> To pay.
      </Box>
    ),
  },
  {
    disc: (
      <Box>
        Seamless Case <br /> Management
      </Box>
    ),
  },
  {
    disc: (
      <Box>
        Get more done,
        <br /> In less time with <br />
        Automated Workflows
      </Box>
    ),
  },
  {
    disc: (
      <Box>
        Workflow <br />
        Management
      </Box>
    ),
  },
  {
    disc: <Box>Contacts &<br/> Matters</Box>,
  },
  {
    disc: "E-Signature",
  },
];

const PowerPacked = () => {
  return (
    <Box>
      <Box
        sx={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#FEDE4B",
          textAlign: "center",
          margin: "4rem 0 1rem 0",
        }}
      >
        legal Help Squad management system
      </Box>

      <Box sx={{ textAlign: "center", marginBottom: "2rem" }}>
        <CustomHeading
          label="POWER PACKED WITH MULTIPLE FEATURES"
          textFontSize="40px"
          textFontWeight="700"
          textAlign="center"
        />
      </Box>

      <Box>
        <Grid
          sx={{ padding: {xs:"1rem" , sm:"3rem"} }}
          container
          spacing={4}
          justifyContent="space-evenly"
        >
          {cardData.map((item: any, i: any) => {
            return (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    border: "2px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "167px",
                    lineHeight: "40px",
                    padding: {xs:"5px 5px", sm:"20px"},
                    fontSize:{xs:"18px", sm:"20px"},
                    fontWeight:"500",
                    textAlign: "center",
                  }}
                >
                  {item.disc}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default PowerPacked;
