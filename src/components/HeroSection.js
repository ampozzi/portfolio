import React, { Component } from 'react';
import { dividerClasses } from '@mui/material';
import { Paper, Container, Grid,Typography,Button,Box } from '@mui/material';
import SocialIcons from './SocialIcons';

const HeroSection=({ children }) => {
    return(
        <Paper sx={{height:'50vh'}}>
            <Container 
            maxWidth='md'
            sx={{height:'100%'}}>
                <Grid 
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
                sx={{height:'100%'}}>
                    <Grid item>
                        <Typography component='h1' variant='h3' color='primary'>
                            Hello, my name is Axel Pozzi
                        </Typography>
                        <Typography component='h5' variant='h5' color='primary.light'>
                            I do stuff and things
                        </Typography>
                        <Box my={2}>
                            <SocialIcons/>  
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}


export default HeroSection;