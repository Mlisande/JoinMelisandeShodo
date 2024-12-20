"use client";

import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import GeniusCalculating from "../images/genius-calculating.gif";
import Calculating from "../images/calculating_resize.png";

const ButtonContact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      role="button"
      variant="contained"
      color="secondary"
      href="mailto:melisande.malonga@gmail.com"
      sx={{
        display: "flex",
        alignItems: "center",
        minWidth: "132px",
        height: isHovered ? "4rem" : "3rem",
        padding: "5px",
        borderRadius: "200px",
        position: "fixed",
        zIndex: 99,
        bottom: "28px",
        right: "15px",
        backgroundColor: "#ee1b48",
        color: "#fff",
        textTransform: "none",
        transition: "transform .3s",
        transform: isHovered ? "scale(1.1)" : "scale(1)", // Pour le survol
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        display="flex"
        justifyContent="center"
        maxWidth={isHovered ? "80px" : "70px"}
        marginLeft="10px"
        marginRight="10px"
        sx={{ transition: "max-width .3s, margin .3s, opacity .3s" }}
      >
        <Image
          src={isHovered ? GeniusCalculating : Calculating}
          alt="genius calculating"
          width={77}
          height={38} // Hauteur de l'image
          style={{
            borderRadius: "200px",
            transition: "transform .3s ease-in-out",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography
        variant="body2"
        paddingRight={isHovered ? "3rem" : "1rem"}
        paddingLeft={isHovered ? "1.5rem" : ".5rem"}
      >
        {isHovered ? "C'est parti !" : "Activer le bouton magique"}
      </Typography>
    </Button>
  );
};

export default ButtonContact;
