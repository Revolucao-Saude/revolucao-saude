import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

const primary = purple[500]; // #f44336

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "white" }}>
        A página que você está procurando não existe.
      </Typography>
      <Button onClick={() => navigate("/inicio")} variant="contained">
        Voltar Para o Início
      </Button>
    </Box>
  );
}
