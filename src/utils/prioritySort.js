import logger from "./logger";

const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const sortNotifications = (notifications) => {
  logger("Sorting notifications");

  return notifications.sort((a, b) => {
    if (
      priorityMap[b.Type] !==
      priorityMap[a.Type]
    ) {
      return (
        priorityMap[b.Type] -
        priorityMap[a.Type]
      );
    }

    return (
      new Date(b.Timestamp) -
      new Date(a.Timestamp)
    );
  });
};