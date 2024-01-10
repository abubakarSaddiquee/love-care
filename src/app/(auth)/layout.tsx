"use client";
import { Suspense, useEffect, useState } from "react";
import LeftSide from "@/sections/auth/sign-up/leftSide";
import { Grid, Box } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
const authPages: string[] = ["/sign-in", "/sign-up"];

export default function AuthLayout({ children }: any) {

  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
      const token = localStorage.getItem("username");
    setIsSuccess(true);
    const checkToken = async () => {
      if (token && authPages.includes(pathname)) {
        router.replace("/under-construction");
      } else {
        setIsSuccess(false);
      }
    };

    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  if (isSuccess) {
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
  }
  return (
    <section>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <LeftSide />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {children}
        </Grid>
      </Grid>
    </section>
  );
}
