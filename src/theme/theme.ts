import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#3155D9"
    },
    secondary: {
      main: "#7C3AED"
    },
    background: {
      default: "#F5F7FB",
      paper: "#FFFFFF"
    },
    success: {
      main: "#16A34A"
    },
    warning: {
      main: "#F59E0B"
    },
    error: {
      main: "#DC2626"
    }
  },

  shape: {
    borderRadius: 14
  },

  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "Arial",
      "sans-serif"
    ].join(",")
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow:
            "0 8px 30px rgba(15,23,42,0.06)"
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 700
        }
      }
    }
  }
});