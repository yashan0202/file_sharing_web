require("dotenv").config();
const express = require("express");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: "*" })); // Adjust CORS for production
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// AWS S3 Configuration
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// File Upload API
app.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileKey = `${Date.now()}_${req.file.originalname}`;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: fileKey,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
  };

  try {
    await s3.send(new PutObjectCommand(params));
    const fileUrl = `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;

    res.json({ message: "File uploaded successfully", url: fileUrl });
  } catch (error) {
    console.error("Error uploading to S3:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Debugging logs
console.log("Incoming request to /upload");
console.log("AWS Bucket:", process.env.AWS_BUCKET_NAME);
console.log("AWS Region:", process.env.AWS_REGION);
console.log("AWS Key:", process.env.AWS_ACCESS_KEY_ID ? "Loaded" : "Not Loaded");
console.log("AWS Secret:", process.env.AWS_SECRET_ACCESS_KEY ? "Loaded" : "Not Loaded");
