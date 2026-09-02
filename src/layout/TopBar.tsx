import { useState } from "react";

import {
  AccountCircleRounded,
  LogoutRounded,
  MenuRounded,
  SettingsBrightnessRounded,
  SettingsRounded,
} from "@mui/icons-material";

import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

import { ThemeMode } from "../theme/ThemeSettings";

interface Props {
  title: string;
  onMenu: () => void;
  onLogout: () => void;
  onSettings: () => void;
  onProfile: () => void;
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
}

export default function TopBar({
  title,
  onMenu,
  onLogout,
  onSettings,
  onProfile,
  themeMode,
  onThemeChange,
}: Props) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar>
        <IconButton onClick={onMenu} sx={{ mr: 1 }}>
          <MenuRounded />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={900}>{title}</Typography>

          <Typography fontSize={11} color="text.secondary">
            Sri Lakshmi Cinemas
          </Typography>
        </Box>

        <Box
          title="Change theme"
          sx={{
            mr: 1,
            display: "flex",
            alignItems: "center",
            color: "text.primary",
          }}
        >
          <SettingsBrightnessRounded />
          <Select
            variant="standard"
            value={themeMode}
            onChange={(event) => onThemeChange(event.target.value as ThemeMode)}
            inputProps={{ "aria-label": "Theme" }}
            sx={{
              ml: 0.5,
              minWidth: 0,
              color: "text.primary",
              "& .MuiSelect-select": {
                py: 0,
                pl: 0.5,
                pr: "20px !important",
                color: "text.primary",
              },
            }}
          >
            <MenuItem value="light">Light</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="system">System</MenuItem>
          </Select>
        </Box>

        <IconButton onClick={(event) => setAnchor(event.currentTarget)}>
          <Avatar
            sx={{
              width: 36,
              height: 36,
            }}
          >
            K
          </Avatar>
        </IconButton>

        <Menu
          anchorEl={anchor}
          open={Boolean(anchor)}
          onClose={() => setAnchor(null)}
        >
          <MenuItem
            onClick={() => {
              onSettings();
              setAnchor(null);
            }}
          >
            <SettingsRounded fontSize="small" sx={{ mr: 1 }} />
            Settings
          </MenuItem>

          <MenuItem
            onClick={() => {
              onProfile();
              setAnchor(null);
            }}
          >
            <AccountCircleRounded fontSize="small" sx={{ mr: 1 }} />
            My Profile
          </MenuItem>

          <MenuItem
            onClick={() => {
              setAnchor(null);
              onLogout();
            }}
          >
            <LogoutRounded fontSize="small" sx={{ mr: 1 }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
