import { useState } from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Switch,
  TextField,
  Typography
} from "@mui/material";

import ThemeSettings, {
  ThemeMode
} from "../../theme/ThemeSettings";

interface Props {
  themeMode: ThemeMode;
  onThemeChange: (
    mode: ThemeMode
  ) => void;
}

export default function Settings({
  themeMode,
  onThemeChange
}: Props) {
  const [whatsapp, setWhatsapp] =
    useState(true);

  const [email, setEmail] =
    useState(true);

  const [saved, setSaved] =
    useState(false);

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        Settings
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Configure your theatre and application preferences
      </Typography>

      <Stack spacing={2}>
        <ThemeSettings
          mode={themeMode}
          onChange={onThemeChange}
        />

        <Card>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={900}
              sx={{ mb: 2 }}
            >
              Theatre Profile
            </Typography>

            <Stack spacing={2}>
              <TextField
                label="Theatre Name"
                defaultValue="Sri Lakshmi Cinemas"
                fullWidth
              />

              <TextField
                label="City"
                defaultValue="Hyderabad"
                fullWidth
              />

              <TextField
                label="Owner Name"
                defaultValue="Kumar"
                fullWidth
              />
            </Stack>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={900}
            >
              Notifications
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 2 }}
            >
              <div>
                <Typography fontWeight={700}>
                  WhatsApp Daily Report
                </Typography>

                <Typography
                  fontSize={13}
                  color="text.secondary"
                >
                  Send daily collection to owner
                </Typography>
              </div>

              <Switch
                checked={whatsapp}
                onChange={() =>
                  setWhatsapp(!whatsapp)
                }
              />
            </Stack>

            <Divider />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ py: 2 }}
            >
              <div>
                <Typography fontWeight={700}>
                  Email Reports
                </Typography>

                <Typography
                  fontSize={13}
                  color="text.secondary"
                >
                  Receive scheduled reports
                </Typography>
              </div>

              <Switch
                checked={email}
                onChange={() =>
                  setEmail(!email)
                }
              />
            </Stack>
          </CardContent>
        </Card>

        <Button
          variant="contained"
          onClick={() => setSaved(true)}
          sx={{
            alignSelf: "flex-start"
          }}
        >
          Save Settings
        </Button>

        {saved && (
          <Alert severity="success">
            Settings saved successfully.
          </Alert>
        )}
      </Stack>
    </>
  );
}