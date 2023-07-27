import * as React from "react";
import Countdown from "./CountDown";
import Badge from "@mui/material/Badge";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import RoofingOutlinedIcon from "@mui/icons-material/RoofingOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = [
    {
      id: 0,
      text: "Dashboard",
      link: "/user/dashboard",
      icon: RoofingOutlinedIcon,
    },
    {
      id: 1,
      text: "Ma Préparation",
      link: "/user/mypreparation",
      icon: ClassOutlinedIcon,
    },
    {
      id: 2,
      text: "Agenda",
      link: "/user/timetable",
      icon: CalendarMonthOutlinedIcon,
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <CardMedia
          title="logo"
          image="src/assets/hhLogo.png"
          sx={{
            width: "100px",
            objectFit: "cover",
            height: "50px",
            borderRadius: 4,
            m: 4,
          }}
        />
      </Toolbar>
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                margin: "10px",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: "#6C5DD3",
                  color: "#ffffff",
                  cursor: "pointer",
                },
              }}
              component={Link}
              to={item.link}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                <Icon component={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
        <IconButton
          component={NavLink}
          to="/login"
          activeClassName="active-icon-login"
        >
          <Avatar src="src/assets/avatar.png" alt="Avatar" />
        </IconButton>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h7"
              noWrap
              component="div"
              sx={{ ml: -58, color: "black" }}
            >
              Bonjour
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "Medium", mr: 34, color: "black" }}
            >
              Comment allez-vous ?
            </Typography>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Countdown />
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show new notifications"
              color="black"
            >
              <Badge color="secondary" variant="dot">
                <NotificationsNoneRoundedIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
