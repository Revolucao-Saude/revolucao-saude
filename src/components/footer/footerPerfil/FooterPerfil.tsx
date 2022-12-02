import React from 'react';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "transparent", height: "12rem" }}>

                    </Box>
                    <Box className='box2' >
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#737373" }} >© 2020 Copyright:</Typography>
                        </Box>
                        <Box paddingTop={0}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "#737373" }} >Revolução Saúde. Todos os direitos reservados</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}


export default Footer;