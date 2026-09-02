import {
  Alert,
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

const alerts = [
  {
    severity: "error" as const,
    title: "Cash Variance",
    message:
      "Reported cash is ₹4,200 lower than expected."
  },
  {
    severity: "warning" as const,
    title: "Low Occupancy",
    message:
      "Screen 2 evening show occupancy is only 31%."
  },
  {
    severity: "success" as const,
    title: "Target Crossed",
    message:
      "Daily collection crossed ₹3 lakh."
  }
];

export default function Alerts() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        Alerts
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Exceptions and important business notifications
      </Typography>

      <Stack spacing={2}>
        {alerts.map((item) => (
          <Card key={item.title}>
            <CardContent>
              <Alert severity={item.severity}>
                <Typography
                  fontWeight={900}
                >
                  {item.title}
                </Typography>

                <Typography>
                  {item.message}
                </Typography>
              </Alert>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
}