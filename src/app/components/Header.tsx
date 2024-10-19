import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import shodoLogo from "../images/shodo_logo.webp"

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
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}} > A propos </Button>
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}}> Services </Button>
                        <Button color="inherit" sx={{typography:"body1", textTransform:"none"}}> Contacts </Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header;