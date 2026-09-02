import {
  ApartmentRounded,
  LocationOnRounded
} from "@mui/icons-material";

import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography
} from "@mui/material";

const theatres = [
  {
    name: "Sri Lakshmi Cinemas",
    city: "Hyderabad",
    screens: 3
  },
  {
    name: "Venkateswara Cinemas",
    city: "Vijayawada",
    screens: 4
  },
  {
    name: "Rama Talkies",
    city: "Visakhapatnam",
    screens: 5
  }
];

export default function Theatres() {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight={900}
      >
        Theatres & Screens
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Manage cinema locations and screens
      </Typography>

      <div className="three-column">
        {theatres.map((theatre) => (
          <Card key={theatre.name}>
            <CardContent>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <ApartmentRounded color="primary" />

                <Typography
                  variant="h6"
                  fontWeight={900}
                >
                  {theatre.name}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <LocationOnRounded fontSize="small" />

                <Typography>
                  {theatre.city}
                </Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                sx={{ mt: 2 }}
              >
                <Chip
                  label={`${theatre.screens} Screens`}
                />

                <Chip
                  label="ACTIVE"
                  color="success"
                />
              </Stack>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}