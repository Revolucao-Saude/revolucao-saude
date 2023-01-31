import * as React from "react";
import "./Profile.css";
import { useTheme } from "@mui/material/styles";
import PaginaContrucao from "../paginaconstrucao/PaginaConstrucao";
import { PrimarySearchAppBar } from "../../components/static/NavBar/NavBar";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
      <PrimarySearchAppBar />
      <PaginaContrucao />
    </>
  );
}
