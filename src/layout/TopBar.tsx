import {
  useState
} from "react";

import {
  AccountCircleRounded,
  LogoutRounded,
  MenuRounded,
  SettingsRounded
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from "@mui/material";

interface Props {
  title: string;
  onMenu: () => void;
  onLogout: () => void;
  onSettings: () => void;
  onProfile: () => void;
}

export default function TopBar({
  title,
  onMenu,
  onLogout,
  onSettings,
  onProfile
}: Props) {
  const [anchor, setAnchor] =
    useState<null | HTMLElement>(null);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        borderBottom:
          "1px solid #E5E7EB"
      }}
    >
      <Toolbar>
        <IconButton
          onClick={onMenu}
          sx={{ mr: 1 }}
        >
          <MenuRounded />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <Typography
            fontWeight={900}
          >
            {title}
          </Typography>

          <Typography
            fontSize={11}
            color="text.secondary"
          >
            Sri Lakshmi Cinemas
          </Typography>
        </Box>

        <IconButton
          onClick={(event) =>
            setAnchor(event.currentTarget)
          }
        >
          <Avatar
            sx={{
              width: 36,
              height: 36
            }}
          >
            K
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={() =>
            setAnchor(null)
          }
        >
          <MenuItem
            onClick={() => {
              onSettings();
              setAnchor(null);
            }}
          >
            <SettingsRounded
              fontSize="small"
              sx={{ mr: 1 }}
            />
            Settings
          </MenuItem>

          <MenuItem
            onClick={() => {
              onProfile();
              setAnchor(null);
            }}
          >
            <AccountCircleRounded
              fontSize="small"
              sx={{ mr: 1 }}
            />

            My Profile
          </MenuItem>

          <MenuItem
            onClick={() => {
              setAnchor(null);
              onLogout();
            }}
          >
            <LogoutRounded
              fontSize="small"
              sx={{ mr: 1 }}
            />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}