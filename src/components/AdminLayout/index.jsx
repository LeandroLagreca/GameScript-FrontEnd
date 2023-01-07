import React from "react";
import { Container } from "@mui/material";
import AdminNavBar from "../AdminNavBar";
import { Box } from "@mui/system";
import Footer from "../Footer/Footer";
export default function AdminLayout({ children }) {
  return (
      <>
				
				<Box display="flex" flexDirection={{xs:'column', sm:'row'}}>
					<AdminNavBar />
					<Container component="main" maxWidth="lg" sx={{ minHeight: "100vh", paddingLeft:{xs:0, md:10} }}>
						{children}
					</Container>
				</Box>
				<Footer />
    </>
  );
}