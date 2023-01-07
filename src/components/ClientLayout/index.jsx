import { Container } from "@mui/material";
import React from "react";

export default function ClientLayout({ children }) {
  return (
    <>
      
      <Container maxWidth="lg">{children}</Container>
      
    </>
  );
}
