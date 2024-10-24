import React from "react";
import { Container, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <Container component="section" maxWidth="lg" sx={{marginTop:"7rem"}}>
            <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}} id="contact"> CONTACTS</Typography>
            <Typography variant="h2" textAlign="center"> Convaincu.e.s ?</Typography>
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
        </Container>
    )
}

export default Contact;

