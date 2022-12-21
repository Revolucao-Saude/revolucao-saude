import React, { useEffect, useState } from "react";
import "./PageFriends.css";
import "./cardFriends/cardFriends.css";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import useLocalStorage from "react-use-localstorage";
import User from "../../models/User";
import { buscaId } from "../../services/Service";
import PaginaConstrucao from "../paginaconstrucao/PaginaConstrucao";

export default function PageFriends() {
  const [token, setToken] = useLocalStorage("token");

  return (
    <>
      <PaginaConstrucao />
      {/* <Grid container spacing={2}>
        <Grid item>

        </Grid>
      </Grid> */}
    </>
  );
}
