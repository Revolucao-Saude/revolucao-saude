import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TagIcon from "@mui/icons-material/Tag";
import { Link } from "react-router-dom";

export default function ButtonExplorer() {
  return (
    <Stack direction="row" spacing={2}>
      <Button href="/explorar" startIcon={<TagIcon/>}>
        Explorar
      </Button>
    </Stack>
  );
}
