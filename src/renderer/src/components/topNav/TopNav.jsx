import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Close,
  Fullscreen,
  FullscreenExit,
  Minimize,
} from "@mui/icons-material";
import {
  handleMinimizeApp,
  handleToggleFullScreen,
  handleWindowClose,
} from "../../scripts/titleBarActions";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/topNav.styles";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";

export default function TopNav() {
  return (
    <Box sx={{}} onDoubleClick={handleToggleFullScreen}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Archivist
          </Typography>

          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}

          <Box sx={{ flexGrow: 1 }} />

          <Box
            className="window-handles"
            sx={{
              minWidth: "145px",
            }}
          >
            <ThemeToggleButton />
            <IconButton
              size="large"
              color="inherit"
              id="minimize-window-button"
              onClick={handleMinimizeApp}
            >
              <Minimize />
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              id="fullscreen-toggle-window-button"
              onClick={handleToggleFullScreen}
            >
              {true ? <FullscreenExit /> : <Fullscreen />}
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              id="close-window-button"
              onClick={handleWindowClose}
            >
              <Close />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
