import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";

const getColor = (type) => {
  if (type === "Placement") {
    return "success";
  }

  if (type === "Result") {
    return "primary";
  }

  return "warning";
};

const NotificationCard = ({ item }) => {
  return (
    <Card
      sx={{
        mt: 2,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            {item.Type}
          </Typography>

          <Chip
            label={item.Type}
            color={getColor(item.Type)}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{ mb: 2 }}
        >
          {item.Message}
        </Typography>

        <Typography
          variant="body2"
          color="gray"
        >
          {item.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;