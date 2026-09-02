import { useMemo, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";
import MeetingRoomRoundedIcon from "@mui/icons-material/MeetingRoomRounded";

import TheatreDialog from "../components/TheatreDialog";
import ScreenDialog from "../components/ScreenDialog";

import {
  Screen,
  Theatre,
} from "../types/theatre.types";

const initialTheatres: Theatre[] = [
  {
    id: 1,
    name: "Sri Lakshmi Theatre",
    location: "Kukatpally",
    address: "KPHB Main Road, Hyderabad",
    mobile: "9876543210",
    email: "manager@srilakshmi.com",
    status: "ACTIVE",
    screens: [
      {
        id: 101,
        name: "Screen 1",
        capacity: 220,
        status: "ACTIVE",
        showsToday: 5,
        ticketsSoldToday: 184,
        collectionToday: 36800,
      },
      {
        id: 102,
        name: "Screen 2",
        capacity: 180,
        status: "ACTIVE",
        showsToday: 4,
        ticketsSoldToday: 96,
        collectionToday: 19200,
      },
    ],
  },
  {
    id: 2,
    name: "Galaxy Cinemas",
    location: "Miyapur",
    address: "Miyapur X Road, Hyderabad",
    mobile: "9876501234",
    email: "owner@galaxycinemas.com",
    status: "ACTIVE",
    screens: [
      {
        id: 201,
        name: "Screen 1",
        capacity: 250,
        status: "ACTIVE",
        showsToday: 5,
        ticketsSoldToday: 210,
        collectionToday: 42000,
      },
      {
        id: 202,
        name: "Screen 2",
        capacity: 150,
        status: "INACTIVE",
        showsToday: 0,
        ticketsSoldToday: 0,
        collectionToday: 0,
      },
    ],
  },
];

export default function Theatres() {
  const [theatres, setTheatres] =
    useState<Theatre[]>(initialTheatres);

  const [selectedTheatreId, setSelectedTheatreId] =
    useState<number>(initialTheatres[0].id);

  const [search, setSearch] = useState("");

  const [theatreDialogOpen, setTheatreDialogOpen] =
    useState(false);

  const [screenDialogOpen, setScreenDialogOpen] =
    useState(false);

  const [editingTheatre, setEditingTheatre] =
    useState<Theatre | null>(null);

  const [editingScreen, setEditingScreen] =
    useState<Screen | null>(null);

  const [activeTab, setActiveTab] = useState(0);

  const filteredTheatres = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return theatres;
    }

    return theatres.filter(
      (theatre) =>
        theatre.name.toLowerCase().includes(value) ||
        theatre.location.toLowerCase().includes(value),
    );
  }, [theatres, search]);

  const selectedTheatre =
    theatres.find(
      (theatre) => theatre.id === selectedTheatreId,
    ) || null;

  const handleAddTheatre = (
    data: Omit<Theatre, "id" | "screens">,
  ) => {
    const newTheatre: Theatre = {
      ...data,
      id: Date.now(),
      screens: [],
    };

    setTheatres((current) => [
      ...current,
      newTheatre,
    ]);

    setSelectedTheatreId(newTheatre.id);
    setTheatreDialogOpen(false);
  };

  const handleEditTheatre = (
    data: Omit<Theatre, "id" | "screens">,
  ) => {
    if (!editingTheatre) return;

    setTheatres((current) =>
      current.map((theatre) =>
        theatre.id === editingTheatre.id
          ? {
              ...theatre,
              ...data,
            }
          : theatre,
      ),
    );

    setEditingTheatre(null);
    setTheatreDialogOpen(false);
  };

  const handleToggleTheatre = (
    theatreId: number,
  ) => {
    setTheatres((current) =>
      current.map((theatre) =>
        theatre.id === theatreId
          ? {
              ...theatre,
              status:
                theatre.status === "ACTIVE"
                  ? "INACTIVE"
                  : "ACTIVE",
            }
          : theatre,
      ),
    );
  };

  const handleAddScreen = (
    data: Omit<Screen, "id">,
  ) => {
    if (!selectedTheatre) return;

    const newScreen: Screen = {
      ...data,
      id: Date.now(),
    };

    setTheatres((current) =>
      current.map((theatre) =>
        theatre.id === selectedTheatre.id
          ? {
              ...theatre,
              screens: [
                ...theatre.screens,
                newScreen,
              ],
            }
          : theatre,
      ),
    );

    setScreenDialogOpen(false);
  };

  const handleEditScreen = (
    data: Omit<Screen, "id">,
  ) => {
    if (!selectedTheatre || !editingScreen) {
      return;
    }

    setTheatres((current) =>
      current.map((theatre) =>
        theatre.id === selectedTheatre.id
          ? {
              ...theatre,
              screens: theatre.screens.map(
                (screen) =>
                  screen.id === editingScreen.id
                    ? {
                        ...screen,
                        ...data,
                      }
                    : screen,
              ),
            }
          : theatre,
      ),
    );

    setEditingScreen(null);
    setScreenDialogOpen(false);
  };

  const handleToggleScreen = (
    screenId: number,
  ) => {
    if (!selectedTheatre) return;

    setTheatres((current) =>
      current.map((theatre) =>
        theatre.id === selectedTheatre.id
          ? {
              ...theatre,
              screens: theatre.screens.map(
                (screen) =>
                  screen.id === screenId
                    ? {
                        ...screen,
                        status:
                          screen.status === "ACTIVE"
                            ? "INACTIVE"
                            : "ACTIVE",
                      }
                    : screen,
              ),
            }
          : theatre,
      ),
    );
  };

  return (
    <Box>
      {/* Header */}
      <Stack
        direction={{
          xs: "column",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "stretch",
          md: "center",
        }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={800}
          >
            Theatres & Screens
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Manage your theatres, screens and
            operating status.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddRoundedIcon />}
          onClick={() => {
            setEditingTheatre(null);
            setTheatreDialogOpen(true);
          }}
          sx={{
            borderRadius: 2.5,
            px: 2.5,
            py: 1.2,
            fontWeight: 700,
          }}
        >
          Add Theatre
        </Button>
      </Stack>

      {/* Search */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search theatre by name or location..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
            }}
          />
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "340px 1fr",
          },
          gap: 3,
        }}
      >
        {/* Theatre list */}
        <Card
          sx={{
            borderRadius: 3,
            height: "fit-content",
          }}
        >
          <CardContent sx={{ p: 0 }}>
            <Box sx={{ p: 2.5 }}>
              <Typography
                fontWeight={800}
                variant="h6"
              >
                My Theatres
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {theatres.length} theatres
              </Typography>
            </Box>

            <Divider />

            <Stack>
              {filteredTheatres.map(
                (theatre) => {
                  const selected =
                    theatre.id ===
                    selectedTheatreId;

                  return (
                    <Box
                      key={theatre.id}
                      onClick={() =>
                        setSelectedTheatreId(
                          theatre.id,
                        )
                      }
                      sx={{
                        p: 2,
                        cursor: "pointer",
                        borderLeft: selected
                          ? "4px solid"
                          : "4px solid transparent",
                        borderColor:
                          "primary.main",
                        bgcolor: selected
                          ? "action.selected"
                          : "transparent",
                        "&:hover": {
                          bgcolor:
                            "action.hover",
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
                          <Typography
                            fontWeight={700}
                          >
                            {theatre.name}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {theatre.location}
                          </Typography>
                        </Box>

                        <Chip
                          size="small"
                          label={
                            theatre.status ===
                            "ACTIVE"
                              ? "Active"
                              : "Inactive"
                          }
                          color={
                            theatre.status ===
                            "ACTIVE"
                              ? "success"
                              : "default"
                          }
                        />
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ mt: 1.5 }}
                      >
                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          {theatre.screens.length}{" "}
                          screens
                        </Typography>
                      </Stack>
                    </Box>
                  );
                },
              )}
            </Stack>
          </CardContent>
        </Card>

        {/* Theatre details */}
        {selectedTheatre && (
          <Card
            sx={{
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                {/* Theatre heading */}
                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  justifyContent="space-between"
                  spacing={2}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2.5,
                        display: "grid",
                        placeItems: "center",
                        bgcolor:
                          "primary.main",
                        color: "white",
                      }}
                    >
                      <MovieFilterRoundedIcon />
                    </Box>

                    <Box>
                      <Typography
                        variant="h5"
                        fontWeight={800}
                      >
                        {selectedTheatre.name}
                      </Typography>

                      <Typography
                        color="text.secondary"
                      >
                        {selectedTheatre.location}
                      </Typography>
                    </Box>

                    <Chip
                      label={
                        selectedTheatre.status ===
                        "ACTIVE"
                          ? "Active"
                          : "Inactive"
                      }
                      color={
                        selectedTheatre.status ===
                        "ACTIVE"
                          ? "success"
                          : "default"
                      }
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={1}
                  >
                    <Tooltip title="Edit Theatre">
                      <IconButton
                        onClick={() => {
                          setEditingTheatre(
                            selectedTheatre,
                          );
                          setTheatreDialogOpen(
                            true,
                          );
                        }}
                      >
                        <EditRoundedIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip
                      title={
                        selectedTheatre.status ===
                        "ACTIVE"
                          ? "Deactivate"
                          : "Activate"
                      }
                    >
                      <IconButton
                        onClick={() =>
                          handleToggleTheatre(
                            selectedTheatre.id,
                          )
                        }
                      >
                        <PowerSettingsNewRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Stack>

                <Divider />

                {/* Theatre stats */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr 1fr",
                      sm: "repeat(4, 1fr)",
                    },
                    gap: 2,
                  }}
                >
                  <StatCard
                    label="Screens"
                    value={
                      selectedTheatre.screens
                        .length
                    }
                  />

                  <StatCard
                    label="Capacity"
                    value={selectedTheatre.screens.reduce(
                      (sum, screen) =>
                        sum + screen.capacity,
                      0,
                    )}
                  />

                  <StatCard
                    label="Tickets Today"
                    value={selectedTheatre.screens.reduce(
                      (sum, screen) =>
                        sum +
                        screen.ticketsSoldToday,
                      0,
                    )}
                  />

                  <StatCard
                    label="Collection Today"
                    value={`₹${selectedTheatre.screens
                      .reduce(
                        (sum, screen) =>
                          sum +
                          screen.collectionToday,
                        0,
                      )
                      .toLocaleString("en-IN")}`}
                  />
                </Box>

                {/* Tabs */}
                <Tabs
                  value={activeTab}
                  onChange={(_, value) =>
                    setActiveTab(value)
                  }
                >
                  <Tab label="Screens" />
                  <Tab label="Theatre Details" />
                </Tabs>

                {/* Screens */}
                {activeTab === 0 && (
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={800}
                        >
                          Screens
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          Manage screens inside this
                          theatre.
                        </Typography>
                      </Box>

                      <Button
                        variant="contained"
                        size="small"
                        startIcon={
                          <AddRoundedIcon />
                        }
                        onClick={() => {
                          setEditingScreen(
                            null,
                          );
                          setScreenDialogOpen(
                            true,
                          );
                        }}
                      >
                        Add Screen
                      </Button>
                    </Stack>

                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          lg: "1fr 1fr",
                        },
                        gap: 2,
                      }}
                    >
                      {selectedTheatre.screens.map(
                        (screen) => (
                          <ScreenCard
                            key={screen.id}
                            screen={screen}
                            onEdit={() => {
                              setEditingScreen(
                                screen,
                              );
                              setScreenDialogOpen(
                                true,
                              );
                            }}
                            onToggle={() =>
                              handleToggleScreen(
                                screen.id,
                              )
                            }
                          />
                        ),
                      )}

                      {selectedTheatre.screens
                        .length === 0 && (
                        <Box
                          sx={{
                            gridColumn:
                              "1 / -1",
                            py: 6,
                            textAlign: "center",
                          }}
                        >
                          <MeetingRoomRoundedIcon
                            sx={{
                              fontSize: 50,
                              color:
                                "text.secondary",
                            }}
                          />

                          <Typography
                            fontWeight={700}
                            sx={{ mt: 1 }}
                          >
                            No screens added
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            Add the first screen
                            for this theatre.
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                )}

                {/* Theatre details */}
                {activeTab === 1 && (
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                      },
                      gap: 2,
                    }}
                  >
                    <Detail
                      label="Theatre Name"
                      value={
                        selectedTheatre.name
                      }
                    />

                    <Detail
                      label="Location"
                      value={
                        selectedTheatre.location
                      }
                    />

                    <Detail
                      label="Mobile"
                      value={
                        selectedTheatre.mobile ||
                        "-"
                      }
                    />

                    <Detail
                      label="Email"
                      value={
                        selectedTheatre.email ||
                        "-"
                      }
                    />

                    <Box
                      sx={{
                        gridColumn: {
                          sm: "1 / -1",
                        },
                      }}
                    >
                      <Detail
                        label="Address"
                        value={
                          selectedTheatre.address ||
                          "-"
                        }
                      />
                    </Box>
                  </Box>
                )}
              </Stack>
            </CardContent>
          </Card>
        )}
      </Box>

      {/* Theatre dialog */}
      <TheatreDialog
        open={theatreDialogOpen}
        theatre={editingTheatre}
        onClose={() => {
          setTheatreDialogOpen(false);
          setEditingTheatre(null);
        }}
        onSave={
          editingTheatre
            ? handleEditTheatre
            : handleAddTheatre
        }
      />

      {/* Screen dialog */}
      <ScreenDialog
        open={screenDialogOpen}
        screen={editingScreen}
        onClose={() => {
          setScreenDialogOpen(false);
          setEditingScreen(null);
        }}
        onSave={
          editingScreen
            ? handleEditScreen
            : handleAddScreen
        }
      />
    </Box>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 2.5,
        bgcolor: "action.hover",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
      >
        {label}
      </Typography>

      <Typography
        variant="h6"
        fontWeight={800}
        sx={{ mt: 0.5 }}
      >
        {value}
      </Typography>
    </Box>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2.5,
      }}
    >
      <Typography
        variant="caption"
        color="text.secondary"
      >
        {label}
      </Typography>

      <Typography
        fontWeight={600}
        sx={{ mt: 0.5 }}
      >
        {value}
      </Typography>
    </Box>
  );
}

function ScreenCard({
  screen,
  onEdit,
  onToggle,
}: {
  screen: Screen;
  onEdit: () => void;
  onToggle: () => void;
}) {
  const occupancy =
    screen.capacity > 0
      ? Math.round(
          (screen.ticketsSoldToday /
            screen.capacity) *
            100,
        )
      : 0;

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
      }}
    >
      <CardContent>
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  display: "grid",
                  placeItems: "center",
                  bgcolor: "action.hover",
                }}
              >
                <MeetingRoomRoundedIcon />
              </Box>

              <Box>
                <Typography
                  fontWeight={800}
                >
                  {screen.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {screen.capacity} seats
                </Typography>
              </Box>
            </Stack>

            <Chip
              size="small"
              label={
                screen.status === "ACTIVE"
                  ? "Active"
                  : "Inactive"
              }
              color={
                screen.status === "ACTIVE"
                  ? "success"
                  : "default"
              }
            />
          </Stack>

          <Divider />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
            }}
          >
            <Metric
              label="Shows"
              value={screen.showsToday}
            />

            <Metric
              label="Tickets"
              value={
                screen.ticketsSoldToday
              }
            />

            <Metric
              label="Occupancy"
              value={`${occupancy}%`}
            />

            <Metric
              label="Collection"
              value={`₹${screen.collectionToday.toLocaleString(
                "en-IN",
              )}`}
            />
          </Box>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
          >
            <Button
              size="small"
              startIcon={<EditRoundedIcon />}
              onClick={onEdit}
            >
              Edit
            </Button>

            <Button
              size="small"
              color={
                screen.status === "ACTIVE"
                  ? "error"
                  : "success"
              }
              startIcon={
                <PowerSettingsNewRoundedIcon />
              }
              onClick={onToggle}
            >
              {screen.status === "ACTIVE"
                ? "Deactivate"
                : "Activate"}
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <Box>
      <Typography
        variant="caption"
        color="text.secondary"
      >
        {label}
      </Typography>

      <Typography fontWeight={800}>
        {value}
      </Typography>
    </Box>
  );
}