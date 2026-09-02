import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Select,
  MenuItem,
  Stack,
  Typography
} from "@mui/material";

import {
  ArrowForwardRounded
} from "@mui/icons-material";

import CollectionHero from "../components/CollectionHero";
import CollectionCards from "../components/CollectionCards";
import CollectionChart from "../components/CollectionChart";
import ScreenPerformance from "../components/ScreenPerformance";

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export default function Dashboard({
  onNavigate
}: DashboardProps) {
  return (
    <>
      <Stack
        direction={{
          xs: "column",
          sm: "row"
        }}
        justifyContent="space-between"
        alignItems={{
          xs: "flex-start",
          sm: "center"
        }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={900}
          >
            Good Evening, Kumar 👋
          </Typography>

          <Typography color="text.secondary">
            31 August 2026 • Sri Lakshmi Cinemas
          </Typography>
        </Box>

        <Select
          size="small"
          defaultValue="today"
        >
          <MenuItem value="today">
            Today
          </MenuItem>

          <MenuItem value="yesterday">
            Yesterday
          </MenuItem>

          <MenuItem value="week">
            This Week
          </MenuItem>

          <MenuItem value="month">
            This Month
          </MenuItem>
        </Select>
      </Stack>

      <CollectionHero />

      <Box sx={{ mt: 2 }}>
        <CollectionCards />
      </Box>

      <Box
        className="two-column"
        sx={{ mt: 2 }}
      >
        <CollectionChart />

        <Card>
          <CardContent>
            <Typography
              variant="h6"
              fontWeight={900}
            >
              Net Collection
            </Typography>

            <Typography
              variant="h3"
              fontWeight={900}
              sx={{ mt: 2 }}
            >
              ₹3,60,150
            </Typography>

            <Typography color="text.secondary">
              After expenses
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                onClick={() =>
                  onNavigate("collection")
                }
              >
                View Collection
              </Button>

              <Button
                variant="outlined"
                onClick={() =>
                  onNavigate("reports")
                }
              >
                Reports
              </Button>
            </Stack>

            <Box
              sx={{
                mt: 4,
                p: 2,
                borderRadius: 3,
                background: "#F1F5FF"
              }}
            >
              <Typography
                fontWeight={800}
              >
                Occupancy
              </Typography>

              <Typography
                variant="h4"
                fontWeight={900}
              >
                72%
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={13}
              >
                +6.2% compared with last week
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box sx={{ mt: 2 }}>
        <ScreenPerformance />
      </Box>

      <Stack
        direction={{
          xs: "column",
          md: "row"
        }}
        spacing={2}
        sx={{ mt: 2 }}
      >
        <Alert severity="warning" sx={{ flex: 1 }}>
          Cash variance detected:
          <strong> ₹4,200</strong>
        </Alert>

        <Alert severity="info" sx={{ flex: 1 }}>
          Screen 2 evening occupancy is only
          <strong> 31%</strong>.
        </Alert>

        <Alert severity="success" sx={{ flex: 1 }}>
          Daily collection target crossed.
        </Alert>
      </Stack>

      <Button
        endIcon={<ArrowForwardRounded />}
        sx={{ mt: 2 }}
        onClick={() => onNavigate("ai")}
      >
        View AI Insights
      </Button>
    </>
  );
}