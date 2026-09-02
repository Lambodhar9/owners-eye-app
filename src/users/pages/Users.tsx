import { useState } from "react";

import {
  AddRounded,
  EditRounded
} from "@mui/icons-material";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography
} from "@mui/material";

import UserForm from "../components/UserForm";

const initialUsers = [
  {
    id: 1,
    name: "Kumar",
    email: "owner@cinema.com",
    mobile: "9876543210",
    role: "OWNER",
    theatre: "Sri Lakshmi Cinemas"
  },
  {
    id: 2,
    name: "Ravi",
    email: "ravi@cinema.com",
    mobile: "9876543211",
    role: "MANAGER",
    theatre: "Sri Lakshmi Cinemas"
  },
  {
    id: 3,
    name: "Suresh",
    email: "suresh@cinema.com",
    mobile: "9876543212",
    role: "OPERATOR",
    theatre: "Sri Lakshmi Cinemas"
  },
  {
    id: 4,
    name: "Priya",
    email: "priya@cinema.com",
    mobile: "9876543213",
    role: "ACCOUNTANT",
    theatre: "Sri Lakshmi Cinemas"
  }
];

export default function Users() {
  const [users, setUsers] =
    useState(initialUsers);

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <Stack
        direction={{
          xs: "column",
          sm: "row"
        }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <div>
          <Typography
            variant="h4"
            fontWeight={900}
          >
            Users
          </Typography>

          <Typography color="text.secondary">
            Manage users and staff access
          </Typography>
        </div>

        <Button
          variant="contained"
          startIcon={<AddRounded />}
          onClick={() => setOpen(true)}
        >
          Add User
        </Button>
      </Stack>

      <Card>
        <CardContent>
          {users.map((user) => (
            <Stack
              key={user.id}
              direction={{
                xs: "column",
                md: "row"
              }}
              spacing={2}
              alignItems={{
                xs: "flex-start",
                md: "center"
              }}
              justifyContent="space-between"
              sx={{
                py: 2,
                borderBottom:
                  "1px solid #E5E7EB"
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar>
                  {user.name.charAt(0)}
                </Avatar>

                <div>
                  <Typography
                    fontWeight={800}
                  >
                    {user.name}
                  </Typography>

                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    {user.email}
                  </Typography>

                  <Typography
                    fontSize={12}
                    color="text.secondary"
                  >
                    {user.mobile}
                  </Typography>
                </div>
              </Stack>

              <Chip
                label={user.role}
                color={
                  user.role === "OWNER"
                    ? "primary"
                    : "default"
                }
              />

              <Typography
                fontSize={13}
              >
                {user.theatre}
              </Typography>

              <IconButton>
                <EditRounded />
              </IconButton>
            </Stack>
          ))}
        </CardContent>
      </Card>

      <UserForm
        open={open}
        onClose={() => setOpen(false)}
        onSave={(user) => {
          setUsers((current) => [
            ...current,
            user
          ]);

          setOpen(false);
        }}
      />
    </>
  );
}