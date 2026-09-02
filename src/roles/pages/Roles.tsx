import {
  useState
} from "react";

import {
  Card,
  CardContent,
  Chip,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography
} from "@mui/material";

const permissions = [
  "Dashboard",
  "Collection",
  "Shows",
  "Theatres",
  "Reports",
  "AI Insights",
  "Alerts",
  "Users",
  "Roles & Permissions",
  "Settings"
];

const defaults: Record<string, boolean> = {
  Dashboard: true,
  Collection: true,
  Shows: true,
  Theatres: true,
  Reports: true,
  "AI Insights": true,
  Alerts: true,
  Users: true,
  "Roles & Permissions": false,
  Settings: false
};

export default function Roles() {
  const [role, setRole] =
    useState("MANAGER");

  const [access, setAccess] =
    useState(defaults);

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        Roles & Permissions
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Control what each staff role can access
      </Typography>

      <Card>
        <CardContent>
          <Typography
            fontWeight={800}
            sx={{ mb: 1 }}
          >
            Select Role
          </Typography>

          <Select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            sx={{
              minWidth: 250,
              mb: 3
            }}
          >
            <MenuItem value="OWNER">
              Owner
            </MenuItem>

            <MenuItem value="MANAGER">
              Theatre Manager
            </MenuItem>

            <MenuItem value="ACCOUNTANT">
              Accountant
            </MenuItem>

            <MenuItem value="OPERATOR">
              Operator
            </MenuItem>
          </Select>

          {permissions.map((permission) => (
            <Stack
              key={permission}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                py: 1.5,
                borderBottom:
                  "1px solid #E5E7EB"
              }}
            >
              <div>
                <Typography
                  fontWeight={700}
                >
                  {permission}
                </Typography>

                <Typography
                  fontSize={12}
                  color="text.secondary"
                >
                  View access
                </Typography>
              </div>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <Chip
                  label={
                    access[permission]
                      ? "Allowed"
                      : "Denied"
                  }
                  color={
                    access[permission]
                      ? "success"
                      : "default"
                  }
                  size="small"
                />

                <Switch
                  checked={
                    access[permission]
                  }
                  onChange={() =>
                    setAccess({
                      ...access,
                      [permission]:
                        !access[permission]
                    })
                  }
                />
              </Stack>
            </Stack>
          ))}
        </CardContent>
      </Card>
    </>
  );
}