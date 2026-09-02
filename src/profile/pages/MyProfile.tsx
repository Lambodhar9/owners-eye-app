import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
  Alert
} from "@mui/material";

export default function MyProfile() {
  const [name, setName] = useState("Kumar");
  const [email, setEmail] = useState("owner@cinema.com");
  const [mobile, setMobile] = useState("9876543210");
  const [saved, setSaved] = useState(false);

  const saveProfile = () => {
    localStorage.setItem(
      "cinema-owner-profile",
      JSON.stringify({
        name,
        email,
        mobile
      })
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        My Profile
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Manage your personal account details
      </Typography>

      <Card>
        <CardContent>
          <Stack spacing={3}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  fontSize: 30
                }}
              >
                K
              </Avatar>

              <div>
                <Typography
                  variant="h6"
                  fontWeight={900}
                >
                  Kumar
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  Theatre Owner
                </Typography>

                <Button
                  size="small"
                  sx={{ mt: 1 }}
                >
                  Change Photo
                </Button>
              </div>
            </Stack>

            <Divider />

            <TextField
              label="Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              fullWidth
            />

            <TextField
              label="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              fullWidth
            />

            <TextField
              label="Mobile Number"
              value={mobile}
              onChange={(e) =>
                setMobile(e.target.value)
              }
              fullWidth
            />

            <TextField
              label="Role"
              value="OWNER"
              disabled
              fullWidth
            />

            <TextField
              label="Theatre"
              value="Sri Lakshmi Cinemas"
              disabled
              fullWidth
            />

            <Button
              variant="contained"
              onClick={saveProfile}
              sx={{
                alignSelf: "flex-start"
              }}
            >
              Save Profile
            </Button>

            {saved && (
              <Alert severity="success">
                Profile updated successfully.
              </Alert>
            )}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}