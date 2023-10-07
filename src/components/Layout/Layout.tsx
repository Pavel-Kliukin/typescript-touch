import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, Outlet, Link as RouterLink } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                My App
              </Link>
            </Typography>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              About
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </div>
  );
};
export default Layout;