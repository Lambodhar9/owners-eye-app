import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

import { Theatre } from "../types/theatre.types";

interface Props {
  open: boolean;
  theatre: Theatre | null;
  onClose: () => void;
  onSave: (
    data: Omit<Theatre, "id" | "screens">,
  ) => void;
}

export default function TheatreDialog({
  open,
  theatre,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (theatre) {
      setName(theatre.name);
      setLocation(theatre.location);
      setAddress(theatre.address);
      setMobile(theatre.mobile);
      setEmail(theatre.email);
    } else {
      setName("");
      setLocation("");
      setAddress("");
      setMobile("");
      setEmail("");
    }
  }, [theatre, open]);

  const handleSave = () => {
    if (!name.trim() || !location.trim()) {
      return;
    }

    onSave({
      name: name.trim(),
      location: location.trim(),
      address: address.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      status: theatre?.status || "ACTIVE",
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {theatre ? "Edit Theatre" : "Add Theatre"}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2.5} sx={{ mt: 1 }}>
          <TextField
            label="Theatre Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Example: Sri Lakshmi Theatre"
          />

          <TextField
            label="Location"
            fullWidth
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Example: Kukatpally"
          />

          <TextField
            label="Address"
            fullWidth
            multiline
            minRows={2}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            label="Mobile"
            fullWidth
            value={mobile}
            onChange={(e) =>
              setMobile(
                e.target.value.replace(/\D/g, "").slice(0, 10),
              )
            }
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!name.trim() || !location.trim()}
        >
          {theatre ? "Update Theatre" : "Add Theatre"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}