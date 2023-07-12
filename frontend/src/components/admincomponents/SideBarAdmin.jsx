import * as React from "react";
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
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  opacity:'50%'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const drawerWidth = 240;

function SideBarAdmin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerItems = [
    {
      id: 0,
      text: "Cabinets",
      link: "/admin/cabinets",
      icon: BusinessCenterOutlinedIcon,
    },
    {
      id: 1,
      text: "Particiens",
      link: "/admin/particiens",
      icon: PermContactCalendarOutlinedIcon,
    },
    {
      id: 2,
      text: "Patients",
      link: "/admin/patients",
      icon: ExploreOutlinedIcon,
    },
    {
      id: 3,
      text: "Interventions",
      link: "/admin/interventions",
      icon: SourceOutlinedIcon,
    },
    {
      id: 4,
      text: "Suivi",
      link: "/admin/suivi",
      icon: SortOutlinedIcon,
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
        <Avatar src="src/assets/avatar.png" alt="Avatar" />
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
              sx={{ color: "black" }}
            >
              Bonjour
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "Medium", mr: 34, color: "black" }}
            >
              Comment aller-vous ?
            </Typography>
          </div>
          <Search sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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



export default SideBarAdmin;