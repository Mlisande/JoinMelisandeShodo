import React from "react";
import { Container, Grid2, Typography, Zoom } from "@mui/material";
import DvrIcon from "@mui/icons-material/Dvr";
import Groups2Icon from "@mui/icons-material/Groups2";
import VerifiedIcon from "@mui/icons-material/Verified";
import StorageIcon from "@mui/icons-material/Storage";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";

interface Service {
  title: string;
  icon: React.ReactElement;
  description: string;
}

const services: Service[] = [
  {
    title: "Développement Front-End",
    icon: <DvrIcon color="secondary" fontSize="large" />,
    description:
      "Création de composants d’interface utilisateur et développement de fonctionnalités dynamiques.",
  },
  {
    title: "Développement Back-End",
    icon: <StorageIcon color="secondary" fontSize="large" />,
    description:
      "Création d'API et de services backend pour des applications web. Conception et gestion des bases de données relationnelles.",
  },
  {
    title: "Qualité et Tests",
    icon: <VerifiedIcon color="secondary" fontSize="large" />,
    description:
      "Assurance de la fiabilité du code à travers des tests unitaires et fonctionnels. Utilisation d'ESLint et Prettier pour maintenir une codebase propre et homogène.",
  },
  {
    title: "Collaboration",
    icon: <Groups2Icon color="secondary" fontSize="large" />,
    description:
      "Gestion du versionnement du code, révision collaborative des modifications et amélioration continue à travers les revues de code.",
  },
  {
    title: "Conception et Prototypage",
    icon: <ViewQuiltIcon color="secondary" fontSize="large" />,
    description:
      "Création de maquettes avec Figma, Excalidraw, LucidChart et analyse des besoins utilisateurs.",
  },
];

const Services: React.FC = () => {
  return (
    <Container component="section" maxWidth="lg" sx={{ marginTop: "7rem" }}>
      <Typography
        variant="h3"
        id="services"
        textAlign="center"
        sx={{ color: "secondary.main" }}
      >
        SERVICES
      </Typography>
      <Typography variant="h2" textAlign="center" marginBottom="1rem">
        Comment puis-je vous aider ?{" "}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {" "}
        Vous avez besoin d'une développeuse ambitieuse et déterminer pour
        construire des applications robutes.{" "}
      </Typography>
      <Typography variant="body1" textAlign="center">
        Je serais ravie de vous aider !{" "}
      </Typography>
      <Grid2 container justifyContent="center" marginTop="4rem" spacing={3}>
        {services.map(
          (
            service,
            index // mappage du tableau services
          ) => (
            <Grid2 key={index} size={4}>
              <Typography
                variant="h3"
                textAlign="center"
                sx={{ color: "secondary.main" }}
              >
                {service.title}
              </Typography>
              <div
                style={{
                  margin: "0 auto",
                  display: "block",
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                {service.icon}
              </div>
              <Typography textAlign="center" marginTop="1rem">
                {service.description}
              </Typography>
            </Grid2>
          )
        )}
      </Grid2>
    </Container>
  );
};

export default Services;
