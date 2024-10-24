import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import shodoLogo from "../images/shodo_logo.webp"
import Link from "next/link";

const Header:React.FC = () => {
    return(
        <header>
            <AppBar sx={{position:'sticky', backgroundColor: 'palette.primary.main', height: '9rem', padding: ' 20px 55px'}}>
                <Toolbar>
                    <Image
                    src={shodoLogo}
                    alt="shodo logo"
                    width={82}
                    height={90}/>
                    <Box component="section" sx={{marginLeft:"26px"}}>
                        <Typography variant="h3" >CRAFTING</Typography>
                        <Typography variant="h3" >SUSTAINABLE</Typography>
                        <Typography variant="h3" sx={{ marginBottom:'.1rem'}}>CODE WE CODE</Typography>
                    </Box>
                    <Stack direction="row" spacing="2rem" marginLeft="auto">
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}} component={Link} href="#about" > A propos </Button>
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}} component={Link} href="#whyshodo"> Pourquoi Shodo </Button>
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}} component={Link} href="#services"> Services </Button>
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}} component={Link} href="#contact"> Contacts </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;