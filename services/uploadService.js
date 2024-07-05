const axios = require("axios");
const strings = require("../config/strings.constant");

const uploadImage = async (sourceImageUrl, inputFileName, base64MaskImage) => {
  const apiKey = process.env.API_KEY;
  const apiUrl = process.env.PHOT_API_URL;

  const headers = {
    "x-api-key": apiKey,
    "Content-Type": "application/json",
  };

  const data = {
    file_name: inputFileName || strings.API.FILE_NAME,
    input_image_link: sourceImageUrl,
    mask_image: `data:image/png;base64,${base64MaskImage}`,
  };

  const response = await axios.post(apiUrl, data, { headers });
  return response.data;
};

module.exports = { uploadImage };
