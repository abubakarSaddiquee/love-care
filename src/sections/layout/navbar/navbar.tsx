"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Divider } from "@mui/material";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoImage from "../../../assets/home/Logo.png";
import blackLogo from "../../../assets/blackLogo.png";
import Image from "next/image";
import { usePathname, useRouter, redirect } from "next/navigation";
import axios from "axios";
import CustomTitle from "@/components/cutom-title";

const navItems = [
  {
    name: "HOME",
    link: "/home",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "DONATE NOW",
    link: "/careers",
  },
  {
    name: "CONTACTUS",
    link: "/why-us",
  },
  {
    name: "OUR TEAM",
    link: "/post-work",
  },
  // {
  //   name: "PLANS",
  //   link: "/plans",
  // },
  // {
  //   name: "FIND CONSULTANT",
  //   link: "/find-consultant",
  // },
];

const Navbar = () => {
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState<any>("");
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const isTab = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeLink, setActiveLink] = useState("HOME");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const handleLinkClick = (link: any) => {
    setActiveLink(link);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    route.push("/");
  };

  const handlClose = (item: any) => {
    route.push(item.link);
    setOpen(!open);
  };
  useEffect(() => {
    setToken(localStorage.getItem("username"));
  }, []);

  const HandlerLogout = () => {
    localStorage.clear();
    route.replace("/sign-in");
    // try {
    //   const respose = await axios.post(
    //     `https://jobs.orcaloholding.co.uk/api/sale-site/logout`,
    //     null,
    //     { headers }
    //   );
    //   console.error("API Response:", respose);
    //   localStorage.clear();
    //   route.replace("/sign-in");
    // } catch (error) {
    //   console.error("API Error:", error);
    // }
  };

  return (
    <Box sx={styles.navbarMain}>
      <Box sx={isTab ? styles.isTabNav : styles.navbar} position="static">
        <Box onClick={handleClick} sx={{ cursor: "pointer" }}>
          <CustomTitle
            primaryText="Kids"
            secondaryText="deserve"
            tertiaryText="better"
            textFontSize="23.216px"
            textFontWeight="500"
          />
        </Box>

        {isMobile ? (
          <IconButton edge="end" color="inherit" onClick={handleToggle}>
            <MenuIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", gap: "4rem", alignItems: "center" }}>
            {navItems?.map((item, i) => {
              let active = false;

              if (item.link === pathname) {
                active = true;
              }
              return (
                <Box
                  onClick={() => {
                    route.push(item.link);
                    handleLinkClick(item.name);
                  }}
                  sx={{
                    cursor: "pointer",
                    ...(active ? styles.activeLink : {}),
                  }}
                  key={i}
                >
                  {item.name}
                </Box>
              );
            })}
            {token && (
              <Button onClick={HandlerLogout} sx={styles.logout}>
                Logout
              </Button>
            )}
          </Box>
        )}
      </Box>

      <Drawer
        sx={{
          zIndex: 999999,
          "& .MuiDrawer-paper": {
            background:
              "linear-gradient(107deg, #FEDE4B 43.73%, #FFA115 100.71%)",
            width: "280px",
            padding: "8px",
          },
        }}
        anchor="right"
        open={open}
        onClose={handleToggle}
      >
        <Button onClick={handleToggle} sx={{ alignSelf: "flex-end" }}>
          <CloseIcon sx={{ color: "#211d0a" }} />
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Image src={blackLogo} alt="logo" width={150} height={60} />
        </Box>

        <Divider />

        <List>
          {navItems.map((item: any, i: number) => {
            let active = false;

            if (item.link === pathname) {
              active = true;
            }

            return (
              <ListItem key={i} onClick={() => handlClose(item)}>
                <Box
                  sx={{
                    ...(active ? styles.activeLink1 : styles.drawerNavItem),
                  }}
                >
                  {item.name}
                </Box>
              </ListItem>
            );
          })}
          {token && (
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
                padding: "8px 16px",
              }}
              onClick={HandlerLogout}
            >
              Logout
            </Box>
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

const styles = {
  navbarMain: {
    position: "absolute",
    width: "100%",
    zIndex: 999999,
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "12px 28px",
    paddingLeft: "5rem",
    paddingRight: "4rem",
    background: "transparent",
  },

  isTabNav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "12px ",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.1)",
    backdropFilter: " blur(25px)",
    background:
      "linear-gradient(180deg,rgba(31, 39, 50, 0.64) -79.69%,rgba(31, 39, 50, 0.24) 100%)",
  },
  drawerNavItem: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    cursor: "pointer",
  },
  activeLink: {
    fontWeight: 500,
    color: "#FEDE4B",
  },
  activeLink1: {
    color: "#0d6efd",
    fontSize: "18px",
    borderBottom: "2px solid #0d6efd",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal",
    cursor: "pointer",
  },
  logout: {
    background: "#FEDE4B",
    color: "black",
    fontWeight: "700",
    "&:hover": { background: "#FEDE4B", color: "black" },
  },
};
