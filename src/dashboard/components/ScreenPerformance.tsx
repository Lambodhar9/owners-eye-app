import {
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";

const screens = [
  {
    screen: "Screen 1",
    collection: 142000,
    occupancy: 75,
    tickets: 420
  },
  {
    screen: "Screen 2",
    collection: 118000,
    occupancy: 60,
    tickets: 355
  },
  {
    screen: "Screen 3",
    collection: 124650,
    occupancy: 75,
    tickets: 473
  }
];

export default function ScreenPerformance() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={900}
        >
          Screen Performance
        </Typography>

        <Typography
          color="text.secondary"
          fontSize={13}
          sx={{ mb: 2 }}
        >
          Today's screen-wise performance
        </Typography>

        {screens.map((screen, index) => (
          <div key={screen.screen}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography fontWeight={700}>
                {screen.screen}
              </Typography>

              <Typography fontWeight={800}>
                ₹{screen.collection.toLocaleString("en-IN")}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
            >
              <Typography
                fontSize={12}
                color="text.secondary"
              >
                {screen.tickets} tickets
              </Typography>

              <Typography
                fontSize={12}
                fontWeight={700}
              >
                {screen.occupancy}% occupied
              </Typography>
            </Stack>

            <LinearProgress
              variant="determinate"
              value={screen.occupancy}
              sx={{
                my: 1.5,
                height: 8,
                borderRadius: 10
              }}
            />

            {index < screens.length - 1 && (
              <Divider sx={{ mb: 2 }} />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}