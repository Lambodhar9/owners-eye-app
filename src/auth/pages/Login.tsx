import { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography
} from "@mui/material";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({
  onLogin
}: LoginProps) {
  const [email, setEmail] =
    useState("owner@cinema.com");

  const [password, setPassword] =
    useState("demo");

  const [error, setError] =
    useState("");

  const handleLogin = () => {
    if (
      email === "owner@cinema.com" &&
      password === "demo"
    ) {
      setError("");
      onLogin();
      return;
    }

    setError(
      "Invalid login. Use owner@cinema.com / demo"
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        p: 2,
        background:
          "linear-gradient(135deg,#0f172a,#312e81,#1d4ed8)"
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 460,
          borderRadius: 4
        }}
      >
        <CardContent sx={{ p: 5 }}>
          <Typography
            variant="h4"
            fontWeight={900}
            textAlign="center"
          >
            🎬 OWNER'S EYE
          </Typography>

          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Cinema Owner Management Platform
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Email / Mobile"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            sx={{ mb: 2 }}
          />

          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>

          <Button fullWidth sx={{ mt: 1 }}>
            Forgot Password?
          </Button>

          <Divider sx={{ my: 2 }}>
            OR
          </Divider>

          <Button
            fullWidth
            variant="outlined"
          >
            Login with OTP
          </Button>

          <Typography
            fontSize={12}
            textAlign="center"
            color="text.secondary"
            sx={{ mt: 3 }}
          >
            Demo: owner@cinema.com / demo
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}