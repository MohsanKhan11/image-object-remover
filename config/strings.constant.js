module.exports = {
  ERRORS: {
    MISSING_FIELDS:
      "Source image URL, input file name, and object image file are required.",
    PROCESSING_ERROR: "Error processing the image.",
  },
  MESSAGES: {
    SERVER_RUNNING: (port) => `Server is running on http://localhost:${port}`,
  },
  API: {
    FILE_NAME: "YourInputFileName",
  },
};
