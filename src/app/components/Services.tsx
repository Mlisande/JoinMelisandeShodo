import React from "react";
import { Container, Grid2, Typography } from "@mui/material";
import DvrIcon from '@mui/icons-material/Dvr';
import Groups2Icon from '@mui/icons-material/Groups2';
import VerifiedIcon from '@mui/icons-material/Verified';
import StorageIcon from '@mui/icons-material/Storage';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';


const Services: React.FC = () => {
    return (
        <Container component="section" maxWidth="lg" sx={{marginTop:"5rem"}}>
            <Typography variant="h3" id="services" textAlign="center" sx={{color:"secondary.main"}}>SERVICES</Typography>
            <Typography variant="h2" textAlign="center" marginBottom="1rem">Comment puis-je vous aider ? </Typography>
            <Typography variant="body1" textAlign="center"> Vous avez besoin d'une développeuse ambitieuse et déterminer pour construire des applications robutes. </Typography>
            <Typography variant="body1" textAlign="center">Je serais revie de vous aider ! </Typography>
            <Grid2 container justifyContent="center"  marginTop="4rem" spacing={3}>
                <Grid2 size={3.3}>
                    <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}}>Développement Front-End </Typography>
                    <DvrIcon color="secondary" fontSize="large" sx={{margin: "0 auto", display: "block", marginTop: "1rem"}}/>
                    <Typography  textAlign="center" marginTop="1rem">Création de composants d’interface utilisateur et développement de fonctionnalités dynamiques. </Typography>
                </Grid2>
                <Grid2 size={3.3}>
                    <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}}>Développement Back-End</Typography>
                    <StorageIcon color="secondary" fontSize="large" sx={{margin: "0 auto", display: "block", marginTop: "1rem"}}/>
                    <Typography textAlign="center" marginTop="1rem">Création d'API et de services backend pour des applications web. Conception et gestion des bases de données relationnelles</Typography>
                </Grid2>
                <Grid2 size={3.3}>
                    <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}}>Qualité et tests</Typography>
                    <VerifiedIcon color="secondary" fontSize="large" sx={{margin: "0 auto", display: "block", marginTop: "1rem"}}/>
                    <Typography textAlign="center" marginTop="1rem">Assurance de la fiabilité du code à travers des tests unitaires et fonctionnels. Utilisation d'ESLint et Prettier pour maintenir une codebase propre et homogène.</Typography>
                </Grid2>
                <Grid2 size={5}>
                    <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}}>Collaboration</Typography>
                    <Groups2Icon color="secondary" fontSize="large" sx={{margin: "0 auto", display: "block", marginTop: "1rem"}}/>
                    <Typography textAlign="center" marginTop="1rem">Gestion du versionnement du code, révision collaborative des modifications et amélioration continue à travers les revues de code.</Typography>
                </Grid2>
                <Grid2 size={5}>
                    <Typography variant="h3" textAlign="center" sx={{color:"secondary.main"}}>Conception et Prototypage</Typography>
                    <ViewQuiltIcon color="secondary" fontSize="large" sx={{margin: "0 auto", display: "block", marginTop: "1rem"}}/>
                    <Typography textAlign="center" marginTop="1rem">Création de maquettes avec Figma, Excalidraw, LucidChart et Analyse des besoins utilisateurs </Typography>
                </Grid2>

            </Grid2>

        </Container>
    );
}

export default Services;