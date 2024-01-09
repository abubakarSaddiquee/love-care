"use client";
import { Suspense, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function AuthLayout({ children }) {
  const router = useRouter();

  return (
    <Box sx={{}}>
      <Grid container>
        <Grid item xs={12}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
