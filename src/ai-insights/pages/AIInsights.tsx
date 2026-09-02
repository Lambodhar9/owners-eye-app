import {
  Alert,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography
} from "@mui/material";

import {
  AutoAwesomeRounded,
  TrendingUpRounded,
  WarningAmberRounded,
  LightbulbRounded
} from "@mui/icons-material";

export default function AIInsights() {
  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <AutoAwesomeRounded color="primary" />

        <Typography
          variant="h4"
          fontWeight={900}
        >
          AI Insights
        </Typography>
      </Stack>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        AI-powered business recommendations for your theatre
      </Typography>

      <div className="two-column">
        <Card>
          <CardContent>
            <Typography
              fontWeight={900}
              variant="h6"
            >
              Tomorrow's Revenue Forecast
            </Typography>

            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ mt: 2 }}
            >
              ₹3.45L – ₹3.85L
            </Typography>

            <Chip
              label="82% Confidence"
              color="success"
              sx={{ mt: 2 }}
            />

            <Typography
              color="text.secondary"
              sx={{ mt: 2 }}
            >
              Based on recent collection,
              occupancy, show timings and
              historical weekday patterns.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography
              fontWeight={900}
              variant="h6"
            >
              Owner Recommendation
            </Typography>

            <Typography
              variant="h5"
              fontWeight={800}
              sx={{ mt: 2 }}
            >
              Promote the 9:30 PM show
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Current occupancy is 31%.
              Consider a limited-time offer
              to increase evening occupancy.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Stack spacing={2} sx={{ mt: 2 }}>
        <Alert
          severity="success"
          icon={<TrendingUpRounded />}
        >
          <strong>Revenue Growth:</strong>{" "}
          Today's collection is 18.4% higher
          than yesterday.
        </Alert>

        <Alert
          severity="warning"
          icon={<WarningAmberRounded />}
        >
          <strong>Screen 2:</strong>{" "}
          Evening occupancy is significantly
          below your theatre average.
        </Alert>

        <Alert
          severity="info"
          icon={<LightbulbRounded />}
        >
          <strong>F&B Opportunity:</strong>{" "}
          F&B revenue per ticket is 9% below
          the weekly average.
        </Alert>
      </Stack>
    </>
  );
}