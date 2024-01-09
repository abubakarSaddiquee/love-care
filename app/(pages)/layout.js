import { Box } from "@mui/material";
import Navbar from "../sections/layout/nabar/Navbar";
import Footer from "../sections/layout/footer/Footer";

export default function PagesLayout({ children }) {
  return (
    <Box>
      <Navbar />
      <Box sx={{ height: "100%", minHeight: "54vh", padding: "5rem" }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
