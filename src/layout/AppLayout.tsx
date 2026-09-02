import {
  useState
} from "react";

import {
  Box
} from "@mui/material";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { ThemeMode } from "../theme/ThemeSettings";

interface Props {
  title: string;
  page: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onProfile: () => void;
  themeMode: ThemeMode;
  onThemeChange: (mode: ThemeMode) => void;
  children: React.ReactNode;
}

export default function AppLayout({
  title,
  page,
  onNavigate,
  onLogout,
  onProfile,
  themeMode,
  onThemeChange,
  children
}: Props) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary"
      }}
    >
      <TopBar
        title={title}
        onMenu={() =>
          setSidebarOpen(true)
        }
        onLogout={onLogout}
        onSettings={() =>
          onNavigate("settings")
        }
        onProfile={() =>
          onProfile()
        }
        themeMode={themeMode}
        onThemeChange={onThemeChange}
      />

      <Sidebar
        open={sidebarOpen}
        onClose={() =>
          setSidebarOpen(false)
        }
        currentPage={page}
        onNavigate={onNavigate}
      />

      <Box className="page-content">
        {children}
      </Box>
    </Box>
  );
}