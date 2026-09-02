import { useMemo, useState } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Login from "../auth/pages/Login";

import Dashboard from "../dashboard/pages/Dashboard";
import Collection from "../collection/pages/Collection";
import Shows from "../shows/pages/Shows";
import Theatres from "../theatres/pages/Theatres";
import Users from "../users/pages/Users";
import Roles from "../roles/pages/Roles";
import Reports from "../reports/pages/Reports";
import AIInsights from "../ai-insights/pages/AIInsights";
import Alerts from "../alerts/pages/Alerts";
import Settings from "../settings/pages/Settings";
import MyProfile from "../profile/pages/MyProfile";

import { ThemeMode } from "../theme/ThemeSettings";
import AppLayout from "../layout/AppLayout";

type Page =
  | "dashboard"
  | "collection"
  | "shows"
  | "theatres"
  | "users"
  | "roles"
  | "reports"
  | "ai"
  | "alerts"
  | "settings"
  | "profile";

const titles: Record<Page, string> = {
  dashboard: "Dashboard",
  collection: "Daily Collection",
  shows: "Today's Shows",
  theatres: "Theatres & Screens",
  users: "Users",
  roles: "Roles & Permissions",
  reports: "Reports",
  ai: "AI Insights",
  alerts: "Alerts",
  settings: "Settings",
  profile: "MyProfile",
};

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const [page, setPage] = useState<Page>("dashboard");

  const [darkMode, setDarkMode] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("cinema-theme");

    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }

    return "system";
  });
  const resolvedMode =
    themeMode === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : themeMode;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedMode,

          primary: {
            main: "#3155D9",
          },

          secondary: {
            main: "#7C3AED",
          },
        },

        shape: {
          borderRadius: 14,
        },

        typography: {
          fontFamily: "Inter, Roboto, Arial, sans-serif",
        },

        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                border: "1px solid",
                borderColor: resolvedMode === "dark" ? "#303642" : "#E6EAF0",
                boxShadow:
                  resolvedMode === "dark"
                    ? "0 10px 30px rgba(0,0,0,.25)"
                    : "0 10px 30px rgba(31,41,55,.06)",
              },
            },
          },
        },
      }),
    [resolvedMode]
  );
  const changeTheme = (mode: ThemeMode) => {
    setThemeMode(mode);

    localStorage.setItem("cinema-theme", mode);
  };

  if (!authenticated) {
    return (
      <ThemeProvider theme={theme}>
        <Login onLogin={() => setAuthenticated(true)} />
      </ThemeProvider>
    );
  }

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard onNavigate={(value) => setPage(value as Page)} />;

      case "collection":
        return <Collection />;

      case "shows":
        return <Shows />;

      case "theatres":
        return <Theatres />;

      case "users":
        return <Users />;

      case "roles":
        return <Roles />;

      case "reports":
        return <Reports />;

      case "ai":
        return <AIInsights />;

      case "alerts":
        return <Alerts />;
      case "profile":
        return <MyProfile />;
      case "settings":
        return <Settings themeMode={themeMode} onThemeChange={changeTheme} />;

      default:
        return <Dashboard onNavigate={(value) => setPage(value as Page)} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppLayout
        title={titles[page] || "My Profile"}
        page={page}
        onNavigate={(value) => setPage(value as Page)}
        onLogout={() => setAuthenticated(false)}
        onProfile={() => setPage("profile")}
      >
        {renderPage()}
      </AppLayout>
    </ThemeProvider>
  );
}
