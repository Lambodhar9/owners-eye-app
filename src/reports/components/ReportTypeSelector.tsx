import {
  MenuItem,
  Select
} from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ReportTypeSelector({
  value,
  onChange
}: Props) {
  return (
    <Select
      fullWidth
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    >
      <MenuItem value="collection">
        Collection Report
      </MenuItem>

      <MenuItem value="screen">
        Screen-wise Report
      </MenuItem>

      <MenuItem value="movie">
        Movie-wise Report
      </MenuItem>

      <MenuItem value="occupancy">
        Occupancy Report
      </MenuItem>

      <MenuItem value="expense">
        Expense Report
      </MenuItem>

      <MenuItem value="profit">
        Profit Summary
      </MenuItem>
    </Select>
  );
}