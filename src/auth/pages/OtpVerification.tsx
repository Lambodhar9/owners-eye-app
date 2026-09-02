import { useEffect, useState } from "react";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function OtpVerification() {
  const navigate = useNavigate();

  const { mobile, verifyOtp } = useAuth();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const [seconds, setSeconds] = useState(30);

  /*
   * Countdown
   */
  useEffect(() => {
    if (seconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setSeconds((previous) => previous - 1);
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [seconds]);

  /*
   * Verify OTP
   */
  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    const success = verifyOtp(otp);

    if (!success) {
      setError("Invalid OTP. Demo OTP is 123456.");
      return;
    }

    setError("");

    /*
     * IMPORTANT:
     * Navigate to Dashboard after successful login
     */
    navigate("/dashboard", {
      replace: true,
    });
  };

  /*
   * Resend OTP
   */
  const handleResendOtp = () => {
    setOtp("");
    setError("");
    setSeconds(30);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        p: 2,
        background:
          "linear-gradient(135deg, #635BFF 0%, #00B8A9 100%)",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 430,
          borderRadius: 4,
        }}
      >
        <CardContent sx={{ p: { xs: 4, sm: 5 } }}>
          <Stack spacing={3}>

            {/* Back */}
            <Button
              startIcon={<ArrowBackRoundedIcon />}
              onClick={() => navigate("/login")}
              sx={{
                alignSelf: "flex-start",
              }}
            >
              Change number
            </Button>

            {/* Icon */}
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: 3,
                display: "grid",
                placeItems: "center",
                bgcolor: "primary.main",
                color: "white",
              }}
            >
              <LockRoundedIcon />
            </Box>

            {/* Heading */}
            <Box>
              <Typography
                variant="h4"
                fontWeight={800}
              >
                Verify OTP
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                We sent a 6-digit OTP to
              </Typography>

              <Typography
                fontWeight={700}
                sx={{ mt: 0.5 }}
              >
                +91 {mobile}
              </Typography>
            </Box>

            {/* Error */}
            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            {/* OTP */}
            <TextField
              fullWidth
              label="Enter OTP"
              placeholder="123456"
              value={otp}
              autoFocus
              inputProps={{
                maxLength: 6,
                inputMode: "numeric",
              }}
              onChange={(event) => {
                const value = event.target.value
                  .replace(/\D/g, "")
                  .slice(0, 6);

                setOtp(value);
                setError("");
              }}
            />

            {/* Verify */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleVerifyOtp}
              sx={{
                py: 1.5,
                borderRadius: 2.5,
                fontWeight: 700,
              }}
            >
              Verify & Continue
            </Button>

            {/* Resend */}
            <Button
              disabled={seconds > 0}
              onClick={handleResendOtp}
            >
              {seconds > 0
                ? `Resend OTP in ${seconds}s`
                : "Resend OTP"}
            </Button>

            {/* Demo */}
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                bgcolor: "action.hover",
                textAlign: "center",
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
              >
                Demo OTP
              </Typography>

              <Typography fontWeight={800}>
                123456
              </Typography>
            </Box>

          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}