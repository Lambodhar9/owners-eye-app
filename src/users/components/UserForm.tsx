import { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField
} from "@mui/material";

interface UserFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (user: any) => void;
}

export default function UserForm({
  open,
  onClose,
  onSave
}: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] =
    useState("MANAGER");

  const save = () => {
    onSave({
      id: Date.now(),
      name,
      email,
      mobile,
      role,
      theatre: "Sri Lakshmi Cinemas",
      status: "ACTIVE"
    });

    setName("");
    setEmail("");
    setMobile("");
    setRole("MANAGER");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Add New User
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
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
            label="Mobile"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
            fullWidth
          />

          <Select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            fullWidth
          >
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

          <Select
            defaultValue="Sri Lakshmi Cinemas"
            fullWidth
          >
            <MenuItem value="Sri Lakshmi Cinemas">
              Sri Lakshmi Cinemas
            </MenuItem>

            <MenuItem value="Venkateswara Cinemas">
              Venkateswara Cinemas
            </MenuItem>
          </Select>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          disabled={!name || !email}
          onClick={save}
        >
          Create User
        </Button>
      </DialogActions>
    </Dialog>
  );
}