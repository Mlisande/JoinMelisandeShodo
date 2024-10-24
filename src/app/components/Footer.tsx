import React from "react";
import { Container, Typography } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
    return(
        <Container component="section" maxWidth="lg" sx={{marginTop:"4rem", marginBottom:"4rem"}}>
            <Typography variant="body2" textAlign="center" marginTop="5rem"> Fait avec le <FavoriteIcon sx={{color:"red", fontSize:"1rem"}}/> par &copy; Mélisande MALONGA  </Typography>
        </Container>
    )
}

export default Footer;