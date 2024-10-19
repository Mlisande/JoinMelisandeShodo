import { Container,Grid2, Typography } from "@mui/material";
import React from "react";
import PillMorpheus from "../images/Pills_Morpheus.gif";
import Image from "next/image";

const HeroTitle : React.FC = () =>{
    return (
        <Container component="main" maxWidth="xl" sx={{ marginTop: '4rem' }}>
            <Grid2 container direction="column" alignItems="center" spacing={2}>
                <Grid2 size={12}>
                    <Typography variant="h1" marginLeft="5rem">VOUS AVEZ </Typography> 
                </Grid2>
                <Grid2>
                    <Grid2 container direction="row" alignItems="baseline"  spacing={4} marginLeft="5rem">
                        <Grid2>
                            <Image src={PillMorpheus} alt="Morpheus Pills"width={304} height={180}/>
                         </Grid2>
                        <Grid2 sx={{alignSelf: 'flex-start'}} >
                            <Typography variant="h1" marginRight="1rem" sx={{ display:"inline-block", transform:'skew(-20deg)', alignSelf: 'flex-start'}}> le </Typography>
                            <Typography variant="h1" sx={{ display:"inline-block"}}> CHOIX </Typography> 
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2>
                    <Typography variant="body1" marginLeft="-10rem"> ... de faire le bon choix</Typography>
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default HeroTitle;
