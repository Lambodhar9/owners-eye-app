import { useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  LinearProgress,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

const MAX_SHOWS_PER_SCREEN = 4;

const theatres = [
  {
    id: 1,
    name: "Sri Lakshmi Theatre",
    location: "Kukatpally",
    status: "ACTIVE",
    screens: [
      { id: 101, name: "Screen 1", capacity: 180 },
      { id: 102, name: "Screen 2", capacity: 220 },
    ],
  },
  {
    id: 2,
    name: "Galaxy Cinemas",
    location: "Miyapur",
    status: "ACTIVE",
    screens: [
      { id: 201, name: "Screen 1", capacity: 240 },
      { id: 202, name: "Screen 2", capacity: 400 },
    ],
  },
];

const initialShows = [
  {
    id: 1,
    theatreId: 1,
    movie: "Pushpa 3",
    screenId: 101,
    time: "10:30 AM",
    sold: 142,
    capacity: 180,
    collection: 42600,
  },
  {
    id: 2,
    theatreId: 1,
    movie: "Pushpa 3",
    screenId: 102,
    time: "1:30 PM",
    sold: 178,
    capacity: 220,
    collection: 53400,
  },
  {
    id: 3,
    theatreId: 1,
    movie: "Coolie",
    screenId: 101,
    time: "6:30 PM",
    sold: 210,
    capacity: 240,
    collection: 63000,
  },
  {
    id: 4,
    theatreId: 2,
    movie: "Coolie",
    screenId: 201,
    time: "7:00 PM",
    sold: 188,
    capacity: 250,
    collection: 57600,
  },
  {
    id: 5,
    theatreId: 2,
    movie: "Evening Special",
    screenId: 202,
    time: "9:30 PM",
    sold: 124,
    capacity: 400,
    collection: 96000,
  },
];

export default function Shows() {
  const [selectedTheatreId, setSelectedTheatreId] = useState(theatres[0].id);
  const [shows, setShows] = useState(initialShows);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [movie, setMovie] = useState("");
  const [screenId, setScreenId] = useState(theatres[0].screens[0].id);
  const [time, setTime] = useState("");

  const selectedTheatre = theatres.find(
    (theatre) => theatre.id === selectedTheatreId
  );

  const theatreShows = shows.filter(
    (show) => show.theatreId === selectedTheatreId
  );

  const availableScreens =
    selectedTheatre?.screens.filter(
      (screen) =>
        theatreShows.filter((show) => show.screenId === screen.id).length <
        MAX_SHOWS_PER_SCREEN
    ) || [];

  const openShowDialog = () => {
    setMovie("");
    setTime("");
    setScreenId(selectedTheatre?.screens[0]?.id || 0);
    setDialogOpen(true);
  };

  const addShow = () => {
    const selectedScreen = selectedTheatre?.screens.find(
      (screen) => screen.id === screenId
    );

    if (!selectedTheatre || !selectedScreen || !movie.trim() || !time) {
      return;
    }

    const screenShowCount = theatreShows.filter(
      (show) => show.screenId === selectedScreen.id
    ).length;

    if (screenShowCount >= MAX_SHOWS_PER_SCREEN) {
      return;
    }

    setShows((current) => [
      ...current,
      {
        id: Date.now(),
        theatreId: selectedTheatre.id,
        movie: movie.trim(),
        screenId: selectedScreen.id,
        time,
        sold: 0,
        capacity: selectedScreen.capacity,
        collection: 0,
      },
    ]);
    setDialogOpen(false);
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        spacing={2}
        sx={{ mb: 1 }}
      >
        <Typography variant="h4" fontWeight={900}>
          Today's Shows
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={openShowDialog}
          disabled={!availableScreens.length}
        >
          Add Show
        </Button>
      </Stack>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        31 August 2026 • {selectedTheatre?.name}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "280px 1fr",
          },
          gap: 3,
        }}
      >
        <Card sx={{ height: "fit-content" }}>
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ p: 2.5 }}>
              <Typography fontWeight={800} variant="h6">
                My Theatres
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Select a theatre to view shows
              </Typography>
            </Box>

            <Divider />

            <Stack>
              {theatres.map((theatre) => {
                const selected = theatre.id === selectedTheatreId;

                return (
                  <Box
                    key={theatre.id}
                    onClick={() => setSelectedTheatreId(theatre.id)}
                    sx={{
                      p: 2,
                      cursor: "pointer",
                      borderLeft: selected
                        ? "4px solid"
                        : "4px solid transparent",
                      borderColor: "primary.main",
                      bgcolor: selected ? "action.selected" : "transparent",
                      "&:hover": {
                        bgcolor: "action.hover",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      spacing={1}
                    >
                      <Box>
                        <Typography fontWeight={700}>{theatre.name}</Typography>

                        <Typography variant="body2" color="text.secondary">
                          {theatre.location}
                        </Typography>
                      </Box>

                      <Chip size="small" label="Active" color="success" />
                    </Stack>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: "block", mt: 1.5 }}
                    >
                      {theatre.screens.length} screens •{" "}
                      {
                        shows.filter((show) => show.theatreId === theatre.id)
                          .length
                      }{" "}
                      shows today
                    </Typography>
                  </Box>
                );
              })}
            </Stack>
          </CardContent>
        </Card>

        <Box>
          {theatreShows.length === 0 ? (
            <Card>
              <CardContent>
                <Typography fontWeight={700}>No shows scheduled</Typography>

                <Typography color="text.secondary">
                  There are no shows for this theatre today.
                </Typography>
              </CardContent>
            </Card>
          ) : (
            theatreShows.map((show) => {
              const occupancy = Math.round((show.sold / show.capacity) * 100);

              return (
                <Card key={`${show.movie}-${show.time}`} sx={{ mb: 2 }}>
                  <CardContent>
                    <Stack
                      direction={{
                        xs: "column",
                        md: "row",
                      }}
                      justifyContent="space-between"
                      spacing={2}
                    >
                      <Box>
                        <Typography variant="h6" fontWeight={900}>
                          {show.movie}
                        </Typography>

                        <Typography color="text.secondary">
                          {
                            selectedTheatre?.screens.find(
                              (screen) => screen.id === show.screenId
                            )?.name
                          }{" "}
                          • {show.time}
                        </Typography>
                      </Box>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip label={`${show.sold}/${show.capacity}`} />

                        <Typography fontWeight={900} color="primary">
                          ₹{show.collection.toLocaleString("en-IN")}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mt: 2 }}
                    >
                      <Typography fontSize={13}>Occupancy</Typography>

                      <Typography fontSize={13} fontWeight={800}>
                        {occupancy}%
                      </Typography>
                    </Stack>

                    <LinearProgress
                      variant="determinate"
                      value={occupancy}
                      sx={{
                        mt: 1,
                        height: 8,
                        borderRadius: 10,
                      }}
                    />
                  </CardContent>
                </Card>
              );
            })
          )}
        </Box>
      </Box>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add Show</DialogTitle>

        <DialogContent>
          <Stack spacing={2.5} sx={{ mt: 1 }}>
            <TextField
              label="Movie Name"
              fullWidth
              required
              value={movie}
              onChange={(event) => setMovie(event.target.value)}
              placeholder="Example: Pushpa 3"
            />

            <TextField
              select
              label="Screen"
              fullWidth
              value={screenId}
              onChange={(event) => setScreenId(Number(event.target.value))}
            >
              {selectedTheatre?.screens.map((screen) => (
                <MenuItem
                  key={screen.id}
                  value={screen.id}
                  disabled={
                    theatreShows.filter((show) => show.screenId === screen.id)
                      .length >= MAX_SHOWS_PER_SCREEN
                  }
                >
                  {screen.name} (
                  {
                    theatreShows.filter((show) => show.screenId === screen.id)
                      .length
                  }
                  /{MAX_SHOWS_PER_SCREEN} shows)
                </MenuItem>
              ))}
            </TextField>

            {availableScreens.length === 0 && (
              <Alert severity="warning">
                Every screen has reached the {MAX_SHOWS_PER_SCREEN}-show daily
                limit.
              </Alert>
            )}

            <TextField
              label="Show Time"
              type="time"
              fullWidth
              required
              value={time}
              onChange={(event) => setTime(event.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            onClick={addShow}
            disabled={!movie.trim() || !time || !screenId}
          >
            Add Show
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
