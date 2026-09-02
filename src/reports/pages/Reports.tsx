import {
  useState
} from "react";

import {
  Alert,
  Button,
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

import {
  DownloadRounded
} from "@mui/icons-material";

import DateRangeFilter from "../components/DateRangeFilter";
import ReportTypeSelector from "../components/ReportTypeSelector";

export default function Reports() {
  const [from, setFrom] =
    useState("2026-08-01");

  const [to, setTo] =
    useState("2026-08-31");

  const [type, setType] =
    useState("collection");

  const [message, setMessage] =
    useState("");

  const generate = (
    format: string
  ) => {
    setMessage(
      `${format} report generated successfully for ${from} to ${to}.`
    );
  };

  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        Reports
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Select dates and generate management reports
      </Typography>

      <Card>
        <CardContent>
          <Stack spacing={3}>
            <DateRangeFilter
              from={from}
              to={to}
              setFrom={setFrom}
              setTo={setTo}
            />

            <ReportTypeSelector
              value={type}
              onChange={setType}
            />

            <Stack
              direction={{
                xs: "column",
                sm: "row"
              }}
              spacing={1}
            >
              <Button
                variant="contained"
                onClick={() =>
                  generate("Report")
                }
              >
                Generate Report
              </Button>

              <Button
                variant="outlined"
                startIcon={<DownloadRounded />}
                onClick={() =>
                  generate("PDF")
                }
              >
                PDF
              </Button>

              <Button
                variant="outlined"
                startIcon={<DownloadRounded />}
                onClick={() =>
                  generate("Excel")
                }
              >
                Excel
              </Button>

              <Button
                variant="outlined"
                startIcon={<DownloadRounded />}
                onClick={() =>
                  generate("CSV")
                }
              >
                CSV
              </Button>
            </Stack>

            {message && (
              <Alert severity="success">
                {message}
              </Alert>
            )}
          </Stack>
        </CardContent>
      </Card>

      <div
        className="three-column"
        style={{ marginTop: 16 }}
      >
        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Gross Collection
            </Typography>

            <Typography
              variant="h4"
              fontWeight={900}
            >
              ₹82.45 L
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Tickets
            </Typography>

            <Typography
              variant="h4"
              fontWeight={900}
            >
              28,421
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography color="text.secondary">
              Average Occupancy
            </Typography>

            <Typography
              variant="h4"
              fontWeight={900}
            >
              68%
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}