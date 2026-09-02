import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

export interface UserFormUser {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: string;
  theatre: string;
  status: string;
}

interface UserFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (user: UserFormUser) => void;
  user?: UserFormUser | null;
  initialTheatre?: string;
}

export default function UserForm({
  open,
  onClose,
  onSave,
  user,
  initialTheatre = "Sri Lakshmi Cinemas",
}: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("MANAGER");
  const [theatre, setTheatre] = useState("Sri Lakshmi Cinemas");

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setMobile(user?.mobile || "");
    setRole(user?.role || "MANAGER");
    setTheatre(user?.theatre || initialTheatre);
  }, [user, open, initialTheatre]);

  const save = () => {
    onSave({
      id: user?.id || Date.now(),
      name,
      email,
      mobile,
      role,
      theatre,
      status: user?.status || "ACTIVE",
    });

    setName("");
    setEmail("");
    setMobile("");
    setRole("MANAGER");
    setTheatre(initialTheatre);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{user ? "Edit User" : "Add New User"}</DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />

          <TextField
            label="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            fullWidth
          />

          <Select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            fullWidth
          >
            <MenuItem value="MANAGER">Theatre Manager</MenuItem>

            <MenuItem value="ACCOUNTANT">Accountant</MenuItem>

            <MenuItem value="OPERATOR">Operator</MenuItem>
          </Select>

          <Select
            value={theatre}
            onChange={(e) => setTheatre(e.target.value)}
            fullWidth
          >
            <MenuItem value="Sri Lakshmi Cinemas">Sri Lakshmi Cinemas</MenuItem>

            <MenuItem value="Venkateswara Cinemas">
              Venkateswara Cinemas
            </MenuItem>
          </Select>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button variant="contained" disabled={!name || !email} onClick={save}>
          {user ? "Save Changes" : "Create User"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
