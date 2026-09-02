import { useState } from "react";

import {
  AddRounded,
  DeleteOutlineRounded,
  EditRounded,
} from "@mui/icons-material";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

import UserForm, { UserFormUser } from "../components/UserForm";

const initialUsers: UserFormUser[] = [
  {
    id: 1,
    name: "Kumar",
    email: "owner@cinema.com",
    mobile: "9876543210",
    role: "OWNER",
    theatre: "Sri Lakshmi Cinemas",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Ravi",
    email: "ravi@cinema.com",
    mobile: "9876543211",
    role: "MANAGER",
    theatre: "Sri Lakshmi Cinemas",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Suresh",
    email: "suresh@cinema.com",
    mobile: "9876543212",
    role: "OPERATOR",
    theatre: "Sri Lakshmi Cinemas",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Priya",
    email: "priya@cinema.com",
    mobile: "9876543213",
    role: "ACCOUNTANT",
    theatre: "Sri Lakshmi Cinemas",
    status: "ACTIVE",
  },
];

const theatres = ["Sri Lakshmi Cinemas", "Venkateswara Cinemas"];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);

  const [open, setOpen] = useState(false);

  const [editingUser, setEditingUser] = useState<UserFormUser | null>(null);

  const [deletingUser, setDeletingUser] = useState<UserFormUser | null>(null);

  const [selectedTheatre, setSelectedTheatre] = useState("ALL");

  const filteredUsers = users.filter(
    (user) => selectedTheatre === "ALL" || user.theatre === selectedTheatre
  );

  return (
    <>
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "center" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <div>
          <Typography variant="h4" fontWeight={900}>
            Users
          </Typography>

          <Typography color="text.secondary">
            Manage users and staff access
          </Typography>
        </div>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <FormControl size="small" sx={{ minWidth: 220 }}>
            <Select
              value={selectedTheatre}
              onChange={(event) => setSelectedTheatre(event.target.value)}
              inputProps={{ "aria-label": "Filter users by theatre" }}
            >
              <MenuItem value="ALL">All Theatres</MenuItem>

              {theatres.map((theatre) => (
                <MenuItem key={theatre} value={theatre}>
                  {theatre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            startIcon={<AddRounded />}
            onClick={() => {
              setEditingUser(null);
              setOpen(true);
            }}
          >
            Add User
          </Button>
        </Stack>
      </Stack>

      <Card>
        <CardContent>
          {filteredUsers.length === 0 ? (
            <Typography
              color="text.secondary"
              sx={{ py: 4, textAlign: "center" }}
            >
              No users assigned to this theatre.
            </Typography>
          ) : (
            filteredUsers.map((user) => (
              <Stack
                key={user.id}
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={2}
                alignItems={{
                  xs: "flex-start",
                  md: "center",
                }}
                justifyContent="space-between"
                sx={{
                  py: 2,
                  borderBottom: "1px solid #E5E7EB",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar>{user.name.charAt(0)}</Avatar>

                  <div>
                    <Typography fontWeight={800}>{user.name}</Typography>

                    <Typography fontSize={13} color="text.secondary">
                      {user.email}
                    </Typography>

                    <Typography fontSize={12} color="text.secondary">
                      {user.mobile}
                    </Typography>
                  </div>
                </Stack>

                <Chip
                  label={user.role}
                  color={user.role === "OWNER" ? "primary" : "default"}
                />

                <Typography fontSize={13}>{user.theatre}</Typography>

                <Stack direction="row" spacing={0.5}>
                  <IconButton
                    aria-label={`Edit ${user.name}`}
                    onClick={() => {
                      setEditingUser(user);
                      setOpen(true);
                    }}
                  >
                    <EditRounded />
                  </IconButton>

                  <IconButton
                    aria-label={`Delete ${user.name}`}
                    color="error"
                    onClick={() => setDeletingUser(user)}
                  >
                    <DeleteOutlineRounded />
                  </IconButton>
                </Stack>
              </Stack>
            ))
          )}
        </CardContent>
      </Card>

      <UserForm
        open={open}
        user={editingUser}
        initialTheatre={
          selectedTheatre === "ALL" ? theatres[0] : selectedTheatre
        }
        onClose={() => {
          setOpen(false);
          setEditingUser(null);
        }}
        onSave={(user) => {
          setUsers((current) =>
            editingUser
              ? current.map((currentUser) =>
                  currentUser.id === user.id ? user : currentUser
                )
              : [...current, user]
          );

          setOpen(false);
          setEditingUser(null);
        }}
      />

      <Dialog
        open={Boolean(deletingUser)}
        onClose={() => setDeletingUser(null)}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Delete User?</DialogTitle>

        <DialogContent>
          <Typography>
            Delete {deletingUser?.name}? This action cannot be undone.
          </Typography>
        </DialogContent>

        <Divider />

        <DialogActions>
          <Button onClick={() => setDeletingUser(null)}>Cancel</Button>

          <Button
            color="error"
            variant="contained"
            onClick={() => {
              if (!deletingUser) return;

              setUsers((current) =>
                current.filter((user) => user.id !== deletingUser.id)
              );
              setDeletingUser(null);
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
