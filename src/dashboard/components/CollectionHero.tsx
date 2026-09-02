import {
  Box,
  Chip,
  Stack,
  Typography
} from "@mui/material";

import {
  TrendingUpRounded
} from "@mui/icons-material";

export default function CollectionHero() {
  return (
    <Box className="collection-hero">
      <Typography
        variant="overline"
        sx={{
          letterSpacing: 2,
          opacity: 0.8
        }}
      >
        TODAY'S TOTAL COLLECTION
      </Typography>

      <Typography className="collection-value">
        ₹3,84,650
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
      >
        <Chip
          icon={<TrendingUpRounded />}
          label="+18.4% vs yesterday"
          sx={{
            background: "rgba(255,255,255,.16)",
            color: "white",
            fontWeight: 700
          }}
        />

        <Typography>
          31 August 2026
        </Typography>
      </Stack>
    </Box>
  );
}