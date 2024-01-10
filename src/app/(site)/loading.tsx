'use client'
import React from "react";
import { ClipLoader } from "react-spinners";
import { Suspense, useEffect, useState } from "react";
import { Box } from "@mui/material";

const Loading = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "auto",
        backgroundColor: "common.white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ClipLoader color="#fede4b" size={150} />
    </Box>
  );
};

export default Loading;
