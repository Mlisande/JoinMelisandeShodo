import React from "react";
import { Container, Grid2, Typography } from "@mui/material";

const IntroSection: React.FC = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ marginTop: "5rem" }}>
      <Grid2
        container
        justifyContent="space-evenly"
        alignItems={{ xs: "center" }}
        gap="1.5rem"
        direction={{ xs: "column", lg: "row" }}
      >
        <Grid2 size={{ xs: 8, lg: 5 }}>
          <Typography variant="body1">
            Tout comme Shodo, je crois que "choisir, c'est s'engager, et que les
            individus comme les entreprises ont le pouvoir d’agir, en faveur de
            rapports humains plus justes".
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 8, lg: 5 }}>
          <Typography variant="body1">
            Aujourd'hui, je choisis d'oser vous contacter car j'y pense depuis
            longtemps.
          </Typography>
          <Typography>
            C'est pourquoi je vous propose ma candidature pour un poste de
            développeuse au sein de votre entreprise.
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default IntroSection;
