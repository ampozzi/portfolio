import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Grid, IconButton, Link } from '@mui/material';

const socialIcons=[
    {icon: LinkedInIcon,url: 'url'},
    {icon: GitHubIcon,url: 'url'}
]

const SocialIcons=() =>{
    return(
        <Grid container >
            {socialIcons.map((items) => (
                <Grid item>
                    <Link href={items.url}>
                        <IconButton>
                            <items.icon />
                        </IconButton>
                    </Link>
                </Grid>
                )
            )}
        </Grid>
    )
}

export default SocialIcons;