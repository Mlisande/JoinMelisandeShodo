'use client';

import React, {useState}  from "react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import GeniusCalculating from "../images/genius-calculating.gif";
import Calculating from "../images/calculating.jpg";

const ButtonContact: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Button variant="contained" color="secondary" href="mailto:melisande.malonga@gmail.com"  sx={{position :"fixed", bottom:"20px", right:"10px",display:"flex", gap:".5rem", borderRadius:"200px", padding: isHovered ? "1rem" : ".5rem", textTransform:"none", transition: "transform .3s ease-in-out", transform: isHovered ? "scale(1.1)": "scale(1)", zIndex:"1000"}}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}>
            <Image src={isHovered ? GeniusCalculating : Calculating} alt="genius calculating" width={70} style={{borderRadius: "200px"}} />
            <Typography variant="body2" >
                {isHovered ? "C'est parti !" : "Activer le bouton magique"}  
            </Typography>

        </Button>
    )
};

export default ButtonContact;