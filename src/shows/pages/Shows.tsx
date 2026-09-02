import {
  Box,
  Card,
  CardContent,
  Chip,
  LinearProgress,
  Stack,
  Typography
} from "@mui/material";

const shows = [
  {
    movie: "Pushpa 3",
    screen: "Screen 1",
    time: "10:30 AM",
    sold: 142,
    capacity: 180,
    collection: 42600
  },
  {
    movie: "Pushpa 3",
    screen: "Screen 2",
    time: "1:30 PM",
    sold: 178,
    capacity: 220,
    collection: 53400
  },
  {
    movie: "Coolie",
    screen: "Screen 1",
    time: "6:30 PM",
    sold: 210,
    capacity: 240,
    collection: 63000
  },
  {
    movie: "Coolie",
    screen: "Screen 3",
    time: "7:00 PM",
    sold: 188,
    capacity: 250,
    collection: 57600
  },
  {
    movie: "Evening Special",
    screen: "Screen 2",
    time: "9:30 PM",
    sold: 124,
    capacity: 400,
    collection: 96000
  }
];

export default function Shows() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        Today's Shows
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        31 August 2026 • All screens
      </Typography>

      {shows.map((show) => {
        const occupancy =
          Math.round(
            (show.sold / show.capacity) * 100
          );

        return (
          <Card
            key={`${show.movie}-${show.time}`}
            sx={{ mb: 2 }}
          >
            <CardContent>
              <Stack
                direction={{
                  xs: "column",
                  md: "row"
                }}
                justifyContent="space-between"
                spacing={2}
              >
                <Box>
                  <Typography
                    variant="h6"
                    fontWeight={900}
                  >
                    {show.movie}
                  </Typography>

                  <Typography color="text.secondary">
                    {show.screen} • {show.time}
                  </Typography>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Chip
                    label={`${show.sold}/${show.capacity}`}
                  />

                  <Typography
                    fontWeight={900}
                    color="primary"
                  >
                    ₹{show.collection.toLocaleString("en-IN")}
                  </Typography>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ mt: 2 }}
              >
                <Typography fontSize={13}>
                  Occupancy
                </Typography>

                <Typography
                  fontSize={13}
                  fontWeight={800}
                >
                  {occupancy}%
                </Typography>
              </Stack>

              <LinearProgress
                variant="determinate"
                value={occupancy}
                sx={{
                  mt: 1,
                  height: 8,
                  borderRadius: 10
                }}
              />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}