"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "@/assets/home/Logo.png";
import Facebook from "@/assets/home/facebook.png";
import Linked from "@/assets/home/in.png";
import Youtube from "@/assets/home/youtube.png";
import Image from "next/image";
import JoinUs from "@/components/join-us/joinUs";
import Link from "next/link";
import FacebookIcon from "@/assets/socialIcon/Fb icon.png";
import LinkedInIcon from "@/assets/socialIcon/Linked in.png";
import InstagramIcon from "@/assets/socialIcon/Insta.png";
import Twitter from "@/assets/socialIcon/twitter.png";
import CustomTitle from "@/components/cutom-title";

const footerData = [
  { links: [{ label: "Careers", url: "/careers" }] },
  { links: [{ label: "Plans", url: "/plans" }] },
  { links: [{ label: "Product", url: "/production" }] },
  { links: [{ label: "Services", url: "/find-consultant" }] },
];

const footerItems = [
  { label: "Code of Conduct", url: "#", diveder: true },
  { label: "Terms of Service", url: "#", diveder: true },
  { label: "Privacy Policy", url: "#", diveder: true },
  { label: "Contact Us", url: "#", diveder: false },
];

const socialIcons = [
  {
    name: "facebook",
    icon: FacebookIcon,
    link: "https://www.facebook.com/legalhelpsquad1",
  },
  {
    name: "twitter",
    icon: Twitter,
    link: "https://twitter.com/legalhelpsquad",
  },
  {
    name: "Linked",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/legalhelpsquad",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/legalhelpsquad23/",
    muiIcon: false,
  },
];

const Footer = () => {
  return (
    <footer>
      <JoinUs
        text="Feed Those Hungry Mouths, Put Clothes on Those Skinny Bones."
        onClick={() => {}}
      />

      <Grid sx={{ marginTop: "63px" }} container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Box
            sx={{
              textAlign: "center",
              marginBottom: { xs: "3rem", sm: "3rem", md: "0px" },
            }}
          >
            <CustomTitle
              primaryText="Kids"
              secondaryText="deserve"
              tertiaryText="better"
              textFontSize="23.216px"
              textFontWeight="500"
            />
            <Box
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                lineWeight: "26px",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              A digital solution to meet Charity requirements <br />
              through one single platform
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {socialIcons.map((item, i) => {
              return (
                <Link key={i} href={item.link}>
                  <Image src={item.icon} alt={item.name} width={30} />
                </Link>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
              marginY: "2rem",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "2rem",
            }}
          ></Box>

          <Box sx={styles.footerTitle}>
            Copyright ©2024 Kids Deserve Better All rights
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={3}>
          <Box
            sx={{
              textAlign: "start",
              marginBottom: { xs: "3rem", sm: "3rem", md: "0px" },
            }}
          >
            <Box sx={{ mb: "1rem", fontSize: "14px", fontWeight: "400" }}>
              <span
                style={{
                  color: "#FEDE4B",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Email:&nbsp;
              </span>
              Info@kidsdeservebetter.com
            </Box>

            <Box sx={{ fontSize: "14px", fontWeight: "400" }}>
              <span
                style={{
                  color: "#FEDE4B",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Address:&nbsp;
              </span>
              kohat university of Seince and technology Hangu KPK Pakistan
            </Box>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};
export default Footer;

const styles = {
  footer: {
    zIndex: "999",
  },
  footerDisc: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: 400,
    lineWeight: "26px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  customFooter: {
    color: "#fff",
    padding: "1rem 0",
    textAlign: "center",
  },
  customLinks: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    dispaly: "flex",
    flexDirection: "column",
  },
  customLink: {
    cursor: "pointer",
    color: "#fff",
    display: "block",
    borderBottom: "none",
    textDecoration: "none",
  },
  socialFooter: {
    background:
      "linear-gradient(180deg, rgba(31, 39, 50, 0.64) -79.69%,rgba(31, 39, 50, 0.24) 100%)",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(25px)",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "baseline !important",
    flexWrap: "wrap",
    padding: "30px",
  },
  footerTitle: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "20px",
    marginBottom: "1rem",
    textAlign: "center",
  },
  socialIcon: {
    display: "flex",
    gap: "18px",
    alignItems: "baseline !important",
    textAlign: "center",
  },
  footerLink: {
    color: "#fff",
    fontFamily: "Inter",
    fontSize: "15px",
    fontWeight: 300,
    lineHeight: "20px",
    display: "flex",
    gap: "2rem",
    cursor: "pointer",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
};
