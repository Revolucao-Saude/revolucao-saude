import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from "react";
import { AboutMe } from "../../components/aboutMe/AboutMe";
import FooterPerfil from "../../components/footer/footerPerfil/FooterPerfil";
import { ImageProfile } from "../../components/imageProfile/ImageProfile";
import { PersonalPosts } from "../../components/personalPosts/PersonalPosts";
import "./Profile.css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);



function Profile () {
    return(
        <div>
            <Grid container>
                <Grid item xs={2} sm={6}>
                    <ImageProfile />
                </Grid>
                <Grid item xs={2} sm={6}>
                <AboutMe />
                </Grid>
                <Grid item xs={2} sm={6}>
                <PersonalPosts />
                </Grid>

                <FooterPerfil />
                
            </Grid>
        </div>
    )
}

export { Profile }