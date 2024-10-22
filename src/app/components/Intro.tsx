import React from "react";
import { Container, Grid2, Typography } from "@mui/material";

const IntroSection : React.FC = () => {
    return(
        <Container component="section" maxWidth="lg" sx={{ marginTop: "5rem"}}>
            <Grid2 container justifyContent="center" >
                <Grid2 size={5}>
                    <Typography>
                    Comme Shodo, je crois que choisir, c'est s'engager, et que les individus comme les entreprises ont le pouvoir d’agir, à travers leurs choix de consommation, d'employeur·euse, de partenaire ou de prestataire, en faveur de rapports humains plus justes.
                    </Typography>
                </Grid2>
                <Grid2 size={5}>
                    <Typography>
                    C'est pourquoi je vous propose ma candidature pour un poste de développeuse au sein de votre entreprise.
                    </Typography> 
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default IntroSection;