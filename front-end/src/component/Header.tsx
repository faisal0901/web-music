import React from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";

const Header: React.FC = () => {
  const pages: string[] = ["Sleeps", "Asmr", "Lofi"];
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "black",
            textDecoration: "none",
          }}
        >
          Relax Music
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: "black", display: "block", mr: 5 }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Button color="secondary">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
