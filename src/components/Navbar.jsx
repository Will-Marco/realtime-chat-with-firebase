import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";

function Navbar() {
  const user = false;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{
            background:
              "linear-gradient(90deg, rgba(0,182,221,1) 0%, rgba(12,12,145,1) 100%)",
          }}
          position="static"
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Will Marco
            </Typography>
            {user ? (
              <Button color="primary">Quit</Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button color="primary">Login</Button>
              </NavLink>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
