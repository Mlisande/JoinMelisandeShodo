"use client";
import React from "react";
import {
  Container,
  Grid2,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import { motion, useInView } from "framer-motion";

const WhyShodo: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  interface TextList {
    text: string;
  }

  const lists: TextList[] = [
    {
      text: "Parce que je souhaite un environnement de travail équitable, qui prône la transparence et le respect. ",
    },
    {
      text: "En tant que développeuse, j'aimerais être entourée de collègues avec qui je peux partager et apprendre. Et on m'a dit que les meilleur.e.s développeur.e.s étaient chez Shodo !",
    },
    {
      text: "Je souhaite prendre part à la construction de cette nouvelle forme de salariat, à laquelle je crois profondément.",
    },
  ];
  return (
    <Container component="section" maxWidth="lg" sx={{ marginTop: "7rem" }}>
      <Typography
        variant="h3"
        id="whyshodo"
        textAlign="center"
        sx={{ color: "secondary.main" }}
      >
        POURQUOI SHODO
      </Typography>
      <Typography variant="h2" textAlign="center" marginBottom="1rem">
        C'est une sacrée entreprise !{" "}
      </Typography>
      <Typography variant="body1" textAlign="center">
        I have a dream, et c'est très embauchée chez Shodo !{" "}
      </Typography>
      <Grid2
        container
        justifyContent={{ xs: "center", lg: "space-evenly" }}
        alignContent={{ xs: "center" }}
        spacing={2}
        marginTop="4rem"
        direction={{ xs: "column", lg: "row" }}
      >
        {/* Colonne gauche : mon text d'intro */}
        <Grid2 size={{ xs: 8, lg: 4 }} alignContent="center">
          <Typography>
            Depuis que j'ai découvert Shodo, je n'arrête pas de penser à ce que
            ça pourrait m'apporter de rejoindre une entreprise qui met la
            diversité en avant et qui pousse chacun·e à se dépasser.
          </Typography>
        </Grid2>
        {/* Colonne droite : ma liste  */}
        <Grid2 size={{ xs: 8, lg: 5 }} spacing={2}>
          <Typography
            variant="h3"
            marginBottom="1rem"
            sx={{ color: "secondary.main" }}
          >
            POURQUOI JE SOUHAITE REJOINDRE SHODO ?
          </Typography>
          <List>
            {lists.map((list, index) => (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <ListItem
                  key={index}
                  sx={{ display: "flex", marginBottom: "1.5rem" }}
                >
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography variant="h2">{`${index + 1}.`}</Typography>
                    }
                    sx={{ flex: "0 0 30px", marginRight: "3rem" }}
                  />
                  <ListItemText primary={list.text} />
                </ListItem>
              </motion.div>
            ))}
          </List>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default WhyShodo;
