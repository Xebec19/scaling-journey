import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import classes from "./UI.module.css";

export default function Layout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Scaling Journey
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>{children}</div>
    </Box>
  );
}
