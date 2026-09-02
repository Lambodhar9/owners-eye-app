import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import { Screen } from "../types/theatre.types";

interface Props {
  open: boolean;
  screen: Screen | null;
  onClose: () => void;
  onSave: (
    data: Omit<Screen, "id">,
  ) => void;
}

export default function ScreenDialog({
  open,
  screen,
  onClose,
  onSave,
}: Props) {
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] =
    useState<Screen["status"]>("ACTIVE");

  useEffect(() => {
    if (screen) {
      setName(screen.name);
      setCapacity(String(screen.capacity));
      setStatus(screen.status);
    } else {
      setName("");
      setCapacity("");
      setStatus("ACTIVE");
    }
  }, [screen, open]);

  const handleSave = () => {
    const parsedCapacity = Number(capacity);

    if (!name.trim() || !parsedCapacity) {
      return;
    }

    onSave({
      name: name.trim(),
      capacity: parsedCapacity,
      status,
      showsToday: screen?.showsToday || 0,
      ticketsSoldToday: screen?.ticketsSoldToday || 0,
      collectionToday: screen?.collectionToday || 0,
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
        {screen ? "Edit Screen" : "Add Screen"}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2.5} sx={{ mt: 1 }}>
          <TextField
            label="Screen Name"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Example: Screen 1"
          />

          <TextField
            label="Seat Capacity"
            type="number"
            fullWidth
            required
            value={capacity}
            onChange={(e) =>
              setCapacity(e.target.value)
            }
            inputProps={{
              min: 1,
            }}
          />

          <TextField
            select
            label="Status"
            fullWidth
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as Screen["status"],
              )
            }
          >
            <MenuItem value="ACTIVE">Active</MenuItem>
            <MenuItem value="INACTIVE">Inactive</MenuItem>
          </TextField>
        </Stack>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Cancel</Button>

        <Button
          variant="contained"
          onClick={handleSave}
          disabled={!name.trim() || !capacity}
        >
          {screen ? "Update Screen" : "Add Screen"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}