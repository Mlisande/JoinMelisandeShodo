import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import shodoLogo from "../images/shodo_logo.webp";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <AppBar
        sx={{
          position: "sticky",
          backgroundColor: "palette.primary.main",
          height: "9rem",
          padding: " 20px 55px",
        }}
      >
        <Toolbar
          sx={{
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 2, md: 2 },
              flexWrap: "wrap",
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Image src={shodoLogo} alt="shodo logo" width={82} height={90} />
            <Box
              component="section"
              sx={{
                marginLeft: {
                  xs: 0,
                  md: "26px",
                  textAlign: { xs: "center", md: "left" },
                },
                marginBottom: { xs: 2, md: 0 },
              }}
            >
              <Typography variant="h3">CRAFTING</Typography>
              <Typography variant="h3">SUSTAINABLE</Typography>
              <Typography variant="h3" sx={{ marginBottom: ".1rem" }}>
                CODE WE CODE
              </Typography>
            </Box>
          </Box>
          <Stack direction="row" spacing="2rem" marginLeft="auto">
            <Button
              color="inherit"
              sx={{
                typography: "body1",
                textTransform: "none",
                ":hover": {
                  transition: "transform .3s color .3s",
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
              component={Link}
              href="#about"
            >
              {" "}
              A propos{" "}
            </Button>
            <Button
              color="inherit"
              sx={{
                typography: "body1",
                textTransform: "none",
                ":hover": {
                  transition: "transform .3s color .3s",
                  color: "primary.main",
                  backgroundColor: "background.default",
                },
              }}
              component={Link}
              href="#whyshodo"
            >
              {" "}
              Pourquoi Shodo{" "}
            </Button>
            <Button
              color="inherit"
              sx={{
                typography: "body1",
                textTransform: "none",
                ":hover": {
                  transition: "transform .3s color .3s",
                  color: "primary.main",
                  backgroundColor: "background.paper",
                },
              }}
              component={Link}
              href="#services"
            >
              {" "}
              Services{" "}
            </Button>
            <Button
              color="inherit"
              sx={{
                typography: "body1",
                textTransform: "none",
                ":hover": {
                  transition: "transform .3s color .3s",
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
              component={Link}
              href="#contact"
            >
              {" "}
              Contacts{" "}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
