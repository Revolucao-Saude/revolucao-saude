import { Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroStories.css"

function CadastroStories() {

  return (
    <>
    <Typography variant="h3">
        Seja bem Vindo
    </Typography>
    <Typography className="mt-5 ">
        Obrigado por se juntar à Revolução Saúde. 
    </Typography>
    <Typography className="mt-5 ">
    Nós construímos esta rede social para lutar contra a desigualdade social que existe em nosso país poís acreditamos que a troca de informação é uma das armas mais poderosas para combater esse problema.
    </Typography>
    <Typography className=" mt-5">
     O seu feedback é valiosíssimo para que possamos seguir entregando exatamente o que os usuários desejam. 
    </Typography>
    </>
  );
}
export default CadastroStories;
