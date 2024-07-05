const strings = require("../config/strings.constant");
const uploadService = require("../services/uploadService");

const uploadImage = async (req, res, next) => {
  try {
    const { sourceImageUrl, inputFileName } = req.body;
    if (!sourceImageUrl || !inputFileName || !req.file) {
      const error = new Error(strings.ERRORS.MISSING_FIELDS);
      error.status = 400;
      throw error;
    }

    const objectFile = req.file;
    const base64MaskImage = objectFile.buffer.toString("base64");

    const result = await uploadService.uploadImage(
      sourceImageUrl,
      inputFileName,
      base64MaskImage
    );

    res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadImage };
