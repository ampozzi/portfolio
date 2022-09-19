import React from 'react';
import { Typography,Container,Box,Grid} from "@mui/material";

const SkillsSection=()=>{
    return(
    <Container
    maxWidth='md'>
        <Grid 
        container
        direction='row'
        justifyContent={{md: 'flex-end',xs: 'center'}}
        >
            <Grid item sx={{padding: '1rem'}}>
                <Typography variant='h5'>
                    Skills
                </Typography>
            </Grid>
            <Grid item sx={{padding: '1rem'}}>
                <Grid container item
                direction='column'
                spacing={1}>
                    <Grid item>
                        <Typography variant='h6'>Languages & frameworks</Typography>
                        <Typography variant='body1'>JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>Databases</Typography>
                        <Typography variant='body1'>MongoDB, PostreSQL, MySQL, Oracle, BigQuery, Teradata, DB2</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>Other</Typography>
                        <Typography variant='body1'>Docker, Amazon Web Services (AWS), CI / CD, Microservices, API design, Agile / Scrum</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    )
};

export default SkillsSection;