import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@material-ui/core";
import MouseOverPopover from "../../components/mousemove/MouseMove";
import ListaPostagem from "../../components/publication/postagens/listaPostagem/ListaPostagem";
import ListaTema from "../../components/temas/listatema/ListarTema";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  function callCreateTheme() {
    window.location.href = "/criar-tema";
  }
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Todas Publicações" {...a11yProps(0)} />
          <Tab label="Todos Temas" {...a11yProps(0)} />
          <Tab label="Dicas de Saúde" {...a11yProps(0)} />
          <Tab label="Palestras" {...a11yProps(1)} />
          <Tab label="Campanhas" {...a11yProps(2)} />
          <MouseOverPopover />
          <Button
            variant="text"
            onClick={() => {
              callCreateTheme();
            }}
          >
            Criar Tema
          </Button>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListaPostagem/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListaTema/>
      </TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
      <TabPanel value={value} index={4}></TabPanel>

    </Box>
  );
}
