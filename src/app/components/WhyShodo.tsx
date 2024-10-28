'use client';
import React from "react";
import { Container, Grid2, Paper, List,ListItem, Typography, ListItemText} from "@mui/material";
import { motion, useInView } from "framer-motion";

const WhyShodo: React.FC = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const lists = [
        {
            text: "Parce que je souhaite un environnement de travail équitable, qui prône la transparence et le respect. ", 
          
        },
        {
            text: "En tant que développeuse, j'aimerais être entourée de collègues avec qui je peux partager et apprendre. On m'a dit qu'ils étaient tous chez Shodo !", 
            
        },
        {
            text: "Je souhaite prendre part à la construction de cette nouvelle forme de salariat, à laquelle je crois profondément.",
        }   
            
    ];
    return(
        <Container component="section" maxWidth="lg" sx={{marginTop:"7rem"}}>
            <Typography variant="h3" id="whyshodo" textAlign="center" sx={{color:"secondary.main"}}>POURQUOI SHODO</Typography>
            <Typography variant="h2" textAlign="center" marginBottom="1rem">C'est une sacrée entreprise !  </Typography>
            <Typography variant="body1" textAlign="center">I have a dream, et c'est très embauchée chez Shodo ! </Typography>
            <Grid2 container justifyContent="space-evenly" spacing={2} marginTop="4rem">
                {/* Colonne gauche : mon text d'intro */}
                <Grid2 size= {4} alignContent="center">
                    <Typography>
                    Depuis que j'ai découvert Shodo, je n'ai cessé de penser à ce que cela représenterait pour moi de rejoindre une entreprise qui fait de la diversité une priorité et qui pousse ses collaborateurs à se surpasser.
                    </Typography>
                </Grid2>
                {/* Colonne droite : ma liste  */}
                <Grid2 size= {5} spacing={2}>
                <Typography variant="h3" marginBottom="1rem" sx={{color:"secondary.main"}}>
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
                            <ListItem key={index} sx={{ display: 'flex', marginBottom: "1.5rem"}}>
                                <ListItemText disableTypography primary={<Typography variant="h2">{`${index+1}.`}</Typography>} sx={{ flex: "0 0 30px", marginRight:"3rem"}}/>
                                <ListItemText primary={list.text} />
                            </ListItem>
                            </motion.div>
                        ))}
                    </List>
                </Grid2>
            </Grid2>
   

        </Container>
    )
}

export default WhyShodo;