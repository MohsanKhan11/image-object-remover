# Image Object Remover

Image Object Remover is a Node.js and Express application that allows users to remove objects from images by providing a URL of the source image and an image mask in base64 format.

## Prerequisites

- Node.js (v20 or later)
- npm (v10 or later)

## Getting Started

### Installation

1. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project

1. Start the server locally:
    ```bash
    npm run dev
    ```

## Usage

### Endpoint: `/upload`

- **Method:** `POST`
- **Description:** Uploads the source image and the mask image, and processes the object removal.
- **Content-Type:** `multipart/form-data`

### Request Parameters

- **sourceImageUrl** (string): The URL of the source image you want to edit.
- **inputFileName** (string): The name of the output file after processing.
- **file** (file): The image mask in base64 format that specifies the object to be removed.

### Example Request

1. Open Postman or any API testing tool.
2. Create a `POST` request to the `/upload` endpoint.
3. Add the following form-data fields:
    - `sourceImageUrl`: The URL of the image you want to edit.
    - `inputFileName`: The name for the processed image file.
    - `file`: Select the image file that contains the object mask.

