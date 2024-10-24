import React from "react";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ContactLink {
    icon: React.ReactNode;
    url: string;
    label: string
}

const contactLinks: ContactLink[] = [
    {
        icon:<LinkedInIcon fontSize="large"/>,
        url: "https://www.linkedin.com/in/melisandemalonga/",
        label: "Linkedin"
    },
    {
        icon:<GitHubIcon fontSize="large"/>,
        url: "https://github.com/Mlisande",
        label: "Github"
    },
    {
        icon:<MailOutlineIcon fontSize="large"/>,
        url: "mailto:melisande.malonga@gmail.com",
        label: "Email"
    },
    {
        icon:<MenuBookIcon fontSize="large"/>,
        url: "https://melisandeportfolio.vercel.app/",
        label: "Portfolio"
    },
]


const Contact: React.FC = () => {
    return (
        <Container component="section" maxWidth="lg" sx={{marginTop:"5rem"}}>
            <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}} id="contact"> CONTACTS</Typography>
            <Typography variant="h2" textAlign="center"> Je serai ravie de vous rencontrer.</Typography>
            <Typography variant="body1" textAlign="center"> N'hésitez pas à me contacter !</Typography>
            <Stack direction="row" spacing="2rem" marginTop="4rem" justifyContent="center">
                {contactLinks.map((link)=>(
                    <IconButton 
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            transition: "transform .1s, color .1s",
                            color:"secondary.main",
                            ":hover":{ backgroundColor: "background.default",color:"primary.main", }
                        }}
                        aria-label={link.label}>
                            {link.icon}
                    </IconButton>
                ))}
            </Stack>
            <Typography variant="body2" textAlign="center" marginTop="5rem"> Fait avec le <FavoriteIcon sx={{color:"red", fontSize:"1rem"}}/> par &copy; Mélisande MALONGA  </Typography>
        </Container>
    )
}

export default Contact;

