import {
  Card,
  CardContent,
  Stack,
  Typography
} from "@mui/material";

import {
  MovieRounded,
  RestaurantRounded,
  LocalParkingRounded,
  PaymentsRounded
} from "@mui/icons-material";

const money = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;

const cards = [
  {
    title: "Ticket Collection",
    value: 321400,
    subtitle: "1,248 tickets",
    icon: <MovieRounded color="primary" />
  },
  {
    title: "F&B Collection",
    value: 48250,
    subtitle: "412 orders",
    icon: <RestaurantRounded color="primary" />
  },
  {
    title: "Parking",
    value: 15000,
    subtitle: "150 vehicles",
    icon: <LocalParkingRounded color="primary" />
  },
  {
    title: "Expenses",
    value: 24500,
    subtitle: "12 entries",
    icon: <PaymentsRounded color="primary" />
  }
];

export default function CollectionCards() {
  return (
    <div className="dashboard-grid">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
            >
              <div>
                <Typography
                  color="text.secondary"
                  fontSize={14}
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight={900}
                  sx={{ mt: 1 }}
                >
                  {money(card.value)}
                </Typography>

                <Typography
                  color="text.secondary"
                  fontSize={12}
                >
                  {card.subtitle}
                </Typography>
              </div>

              {card.icon}
            </Stack>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}