"use client";
import Navbar from "@/sections/layout/navbar/navbar";
import Footer from "@/sections/layout/footer/footer";
import { Box } from "@mui/material";


export default function PageLayout({ children }: any) {
  //  const [isSuccess, setIsSuccess] = useState<boolean>(true);

  return (
    <section>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </section>
  );
}
