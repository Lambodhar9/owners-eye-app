import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography
} from "@mui/material";

import {
  DownloadRounded,
  PaymentsRounded
} from "@mui/icons-material";

const money = (n: number) =>
  `₹${n.toLocaleString("en-IN")}`;

const payments = [
  ["Cash", 48200],
  ["UPI", 112750],
  ["Card", 74500],
  ["Online Booking", 149200]
];

export default function Collection() {
  return (
    <>
      <Stack
        direction={{
          xs: "column",
          sm: "row"
        }}
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={900}
          >
            Daily Collection
          </Typography>

          <Typography color="text.secondary">
            Monday, 31 August 2026
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<DownloadRounded />}
        >
          Download Report
        </Button>
      </Stack>

      <div className="three-column">
        {[
          ["Gross Collection", 384650],
          ["Expenses", 24500],
          ["Net Collection", 360150]
        ].map(([title, value]) => (
          <Card key={title}>
            <CardContent>
              <Typography color="text.secondary">
                {title}
              </Typography>

              <Typography
                variant="h4"
                fontWeight={900}
                sx={{ mt: 1 }}
              >
                {money(value as number)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card sx={{ mt: 2 }}>
        <CardContent>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ mb: 2 }}
          >
            <PaymentsRounded color="primary" />

            <Typography
              variant="h6"
              fontWeight={900}
            >
              Payment Collection
            </Typography>
          </Stack>

          {payments.map(([name, amount]) => (
            <Box key={name}>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ py: 2 }}
              >
                <Typography>
                  {name}
                </Typography>

                <Typography fontWeight={900}>
                  {money(amount as number)}
                </Typography>
              </Stack>

              <Divider />
            </Box>
          ))}

          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ pt: 2 }}
          >
            <Typography fontWeight={900}>
              Total
            </Typography>

            <Typography
              fontWeight={900}
              color="primary"
            >
              ₹3,84,650
            </Typography>
          </Stack>
        </CardContent>
      </Card>

      <Stack
        direction={{
          xs: "column",
          sm: "row"
        }}
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Alert severity="success">
          1,248 tickets sold today.
        </Alert>

        <Alert severity="warning">
          ₹4,200 cash variance needs verification.
        </Alert>
      </Stack>
    </>
  );
}