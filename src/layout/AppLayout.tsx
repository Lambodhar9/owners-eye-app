import {
  useState
} from "react";

import {
  Box
} from "@mui/material";

import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface Props {
  title: string;
  page: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onProfile: () => void;
  children: React.ReactNode;
}

export default function AppLayout({
  title,
  page,
  onNavigate,
  onLogout,
  onProfile,
  children
}: Props) {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <Box sx={{ minHeight: "100vh" }}>
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