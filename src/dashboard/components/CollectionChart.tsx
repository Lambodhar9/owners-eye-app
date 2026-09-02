import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { day: "Mon", collection: 320 },
  { day: "Tue", collection: 380 },
  { day: "Wed", collection: 345 },
  { day: "Thu", collection: 410 },
  { day: "Fri", collection: 455 },
  { day: "Sat", collection: 520 },
  { day: "Sun", collection: 480 }
];

export default function CollectionChart() {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          fontWeight={900}
        >
          7-Day Collection Trend
        </Typography>

        <Typography
          color="text.secondary"
          fontSize={13}
        >
          Collection in ₹ thousands
        </Typography>

        <Box sx={{ height: 300, mt: 2 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="collection"
                fill="#3155D9"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}