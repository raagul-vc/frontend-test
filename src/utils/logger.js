const logger = (message, data = "") => {
  console.log(
    `[LOG] ${new Date().toISOString()} - ${message}`,
    data
  );
};

export default logger;