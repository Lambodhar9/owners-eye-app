import {
  Stack,
  TextField
} from "@mui/material";

interface Props {
  from: string;
  to: string;
  setFrom: (value: string) => void;
  setTo: (value: string) => void;
}

export default function DateRangeFilter({
  from,
  to,
  setFrom,
  setTo
}: Props) {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row"
      }}
      spacing={2}
    >
      <TextField
        type="date"
        label="From Date"
        value={from}
        onChange={(e) =>
          setFrom(e.target.value)
        }
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />

      <TextField
        type="date"
        label="To Date"
        value={to}
        onChange={(e) =>
          setTo(e.target.value)
        }
        InputLabelProps={{
          shrink: true
        }}
        fullWidth
      />
    </Stack>
  );
}