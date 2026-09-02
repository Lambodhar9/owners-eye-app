import {
  AssessmentRounded,
  ApartmentRounded,
  HomeRounded,
  MovieRounded,
  PaymentsRounded,
  PeopleRounded,
  AdminPanelSettingsRounded,
  SmartToyRounded,
  WarningAmberRounded,
  SettingsRounded
} from "@mui/icons-material";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navigation = [
  ["dashboard", "Dashboard", <HomeRounded />],
  ["collection", "Collection", <PaymentsRounded />],
  ["shows", "Shows", <MovieRounded />],
  ["theatres", "Theatres", <ApartmentRounded />],
  ["users", "Users", <PeopleRounded />],
  [
    "roles",
    "Roles & Permissions",
    <AdminPanelSettingsRounded />
  ],
  ["reports", "Reports", <AssessmentRounded />],
  ["ai", "AI Insights", <SmartToyRounded />],
  ["alerts", "Alerts", <WarningAmberRounded />],
  ["settings", "Settings", <SettingsRounded />]
];

export default function Sidebar({
  open,
  onClose,
  currentPage,
  onNavigate
}: SidebarProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant="temporary"
    >
      <Box
        sx={{
          width: 290,
          p: 2
        }}
      >
        <Typography
          variant="h6"
          fontWeight={900}
        >
          🎬 OWNER'S EYE
        </Typography>

        <Typography
          color="text.secondary"
          fontSize={13}
          sx={{ mb: 2 }}
        >
          Cinema Owner Platform
        </Typography>

        <Divider />

        <List sx={{ mt: 1 }}>
          {navigation.map(
            ([id, label, icon]) => (
              <ListItemButton
                key={id.toString()}
                selected={
                  currentPage === id
                }
                onClick={() => {
                  onNavigate(id.toString());
                  onClose();
                }}
                sx={{
                  borderRadius: 2,
                  mb: 0.5
                }}
              >
                <ListItemIcon>
                  {icon}
                </ListItemIcon>

                <ListItemText
                  primary={label}
                />
              </ListItemButton>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
}