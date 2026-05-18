import axios from "axios";
import logger from "../utils/logger";

const API =
  "http://4.224.186.213/evaluation-service/notifications";

const dummyData = [
  {
    ID: "1",
    Type: "Placement",
    Message: "Afford Medicals ",
    Timestamp: "2026-04-22 17:51:18",
  },
  {
    ID: "2",
    Type: "Result",
    Message: "Even Sem Results",
    Timestamp: "2026-04-22 17:50:54",
  },
  {
    ID: "3",
    Type: "Event",
    Message: "Auto Expo",
    Timestamp: "2026-04-22 17:50:06",
  },
];

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    logger("Calling notifications API");

    const response = await axios.get(API, {
      params: {
        page,
        limit,
        notification_type: type,
      },
    });

    logger("API Success", response.data);

    return response.data.notifications;
  } catch (error) {
    logger("API Failed", error);

    logger("Using fallback dummy data");

    if (type) {
      return dummyData.filter(
        (item) => item.Type === type
      );
    }

    return dummyData;
  }
};