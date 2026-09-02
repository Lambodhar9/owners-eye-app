import {
  DarkModeRounded,
  LightModeRounded,
  SettingsBrightnessRounded
} from "@mui/icons-material";

import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography
} from "@mui/material";

export type ThemeMode =
  | "light"
  | "dark"
  | "system";

interface Props {
  mode: ThemeMode;
  onChange: (mode: ThemeMode) => void;
}

export default function ThemeSettings({
  mode,
  onChange
}: Props) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <SettingsBrightnessRounded color="primary" />

            <div>
              <Typography
                variant="h6"
                fontWeight={900}
              >
                Appearance
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={13}
              >
                Choose how Owner's Eye looks
              </Typography>
            </div>
          </Stack>

          <FormControl fullWidth>
            <InputLabel>
              Theme
            </InputLabel>

            <Select
              value={mode}
              label="Theme"
              onChange={(e) =>
                onChange(
                  e.target.value as ThemeMode
                )
              }
            >
              <MenuItem value="light">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <LightModeRounded
                    fontSize="small"
                  />

                  <span>
                    Light
                  </span>
                </Stack>
              </MenuItem>

              <MenuItem value="dark">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <DarkModeRounded
                    fontSize="small"
                  />

                  <span>
                    Dark
                  </span>
                </Stack>
              </MenuItem>

              <MenuItem value="system">
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <SettingsBrightnessRounded
                    fontSize="small"
                  />

                  <span>
                    System Default
                  </span>
                </Stack>
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </CardContent>
    </Card>
  );
}