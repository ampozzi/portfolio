import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, IconButton } from '@mui/material';

const socialIcons=[
    {icon: LinkedInIcon,url: 'url'},
    {icon: GitHubIcon,url: 'url'}
]

const SocialIcons=() =>{
    return(
        <Grid container spacing={1}>
            {socialIcons.map((items) => (
                <Grid item>
                    <IconButton>
                        <items.icon />
                    </IconButton>
                </Grid>
                )
            )}
        </Grid>
    )
}

export default SocialIcons;