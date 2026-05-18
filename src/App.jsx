import { useEffect, useState } from "react";

import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import FilterBar from "./components/FilterBar";
import NotificationCard from "./components/NotificationCard";

import { fetchNotifications } from "./services/api";
import { sortNotifications } from "./utils/prioritySort";
import logger from "./utils/logger";

function App() {
  const [notifications, setNotifications] =
    useState([]);

  const [type, setType] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [page, setPage] = useState(1);

  const [limit, setLimit] =
    useState(5);

  useEffect(() => {
    loadNotifications();
  }, [type, page, limit]);

  const loadNotifications = async () => {
    try {
      logger("Loading notifications");

      setLoading(true);

      let data = await fetchNotifications(
        page,
        limit,
        type
      );

      data = sortNotifications(data);

      setNotifications(data);

      logger("Notifications loaded");
    } catch (error) {
      logger("Loading failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{
          mt: 4,
          mb: 3,
          fontWeight: "bold",
        }}
      >
        🎓 Campus Notifications Dashboard
      </Typography>

      <FilterBar
        type={type}
        setType={setType}
      />

      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography>
          Top Notifications Limit
        </Typography>

        <Select
          value={limit}
          onChange={(e) =>
            setLimit(e.target.value)
          }
          fullWidth
        >
          <MenuItem value={5}>
            Top 5
          </MenuItem>

          <MenuItem value={10}>
            Top 10
          </MenuItem>

          <MenuItem value={15}>
            Top 15
          </MenuItem>
        </Select>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <Button
          variant="contained"
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Previous
        </Button>

        <Button
          variant="contained"
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </Button>
      </Box>

      <Typography sx={{ mb: 2 }}>
        Current Page: {page}
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        notifications.map((item) => (
          <NotificationCard
            key={item.ID}
            item={item}
          />
        ))
      )}
    </Container>
  );
}

export default App;