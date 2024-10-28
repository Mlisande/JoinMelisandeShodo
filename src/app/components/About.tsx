import { Box, Button, Container, Grid2, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";

const About: React.FC = () => {
    return (
        <Container component="section" maxWidth="lg" sx={{ marginTop: "7rem"}}>
            <Typography variant="h3" id="about" textAlign="center" sx={{color:"secondary.main"}}> A PROPOS </Typography>
            <Typography variant="h2" textAlign="center"> En quelques mots ...</Typography>
            <Grid2 container justifyContent="space-evenly" marginTop="4rem" spacing={2}>
                <Grid2 size={5}>
                    <Typography variant="h3" marginBottom="1rem"> PROFIL </Typography>
                    <Typography variant="body1">
                        Développeuse depuis janvier 2022, titulaire du Titre Professionnel de Concepteur Développeur d'Applications, j'ai récemment terminé une année en tant que développeuse full stack chez Palo IT, où j'ai travaillé sur divers projets avec React.js, TypeScript, Python, Docker et AWS. Passionnée par le web, j'interviens aussi bien en front-end qu'en back-end, en utilisant des technologies comme HTML5, CSS, JavaScript, Next.js, Node.js, et SQL pour la conception des bases de données. Je conçois également des maquettes avec Figma et Canva. 
                    </Typography> 
                    <Typography variant="body1" marginTop="1rem">
                        Je cherche souhaite rejoindre Shodo en CDI Pour intégrer une équipe dynamique et évoluer dans un environnement qui favorise le partage de connaissances.
                    </Typography> 
                </Grid2>
                <Grid2 size={4}>
                    <Typography variant="h3" marginBottom="1rem"> COMPÉTENCES </Typography>
                    <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">HTML</Typography>
                        <Typography variant="h3">80 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={70} color="secondary" />
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">JAVASCRIPT</Typography>
                        <Typography variant="h3">60 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={60} color="warning" sx={{'& .MuiLinearProgress-bar': { backgroundColor:'background.default'}}} />
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">REACT.JS</Typography>
                        <Typography variant="h3">50 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={50} color="secondary" />
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">CSS</Typography>
                        <Typography variant="h3">80 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={70} color="warning" sx={{'& .MuiLinearProgress-bar': { backgroundColor:'background.default'}}} />
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">SQL</Typography>
                        <Typography variant="h3"> 40 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={40} color="secondary" />
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">POSTGRESQL</Typography>
                        <Typography variant="h3">40 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={40} color="warning" sx={{'& .MuiLinearProgress-bar': { backgroundColor:'background.default'}}} />
                        <Box display="flex" justifyContent="space-between">
                        <Typography variant="h3">JEST</Typography>
                        <Typography variant="h3">30 %</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={30} color="secondary"/> 
                    </Stack> 
                </Grid2>
            </Grid2>
            <Button  sx={{marginBottom:"1rem"}}>CONTACT</Button>
        </Container>
    );
}

export default About;