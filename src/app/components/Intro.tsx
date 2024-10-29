import React from "react";
import { Container, Grid2, Typography } from "@mui/material";

const IntroSection : React.FC = () => {
    return(
        <Container component="section" maxWidth="lg" sx={{ marginTop: "5rem"}}>
            <Grid2 container justifyContent="center" gap="1.5rem" >
                <Grid2 size={5}>
                    <Typography variant="body1">
                    Tout comme Shodo, je crois "que choisir, c'est s'engager, et que les individus comme les entreprises ont le pouvoir d’agir, à travers leurs choix de consommation, d'employeur·euse, en faveur de rapports humains plus justes".
                    </Typography>
                </Grid2>
                <Grid2 size={5}>
                    <Typography variant="body1">
                    Aujourd'hui, je choisis d'oser vous contacter même si ça fait plusieurs semaines que j'ai peur de le faire.
                    </Typography>
                    <Typography>
                    C'est pourquoi je vous propose ma candidature pour un poste de développeuse au sein de votre entreprise.
                    </Typography> 
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default IntroSection;