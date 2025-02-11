import React, { useState } from "react";
import axios from "axios";
import "../styles.css";

const FileUpload = ({ onFileUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", files[0]); // Only uploading one file for now

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.url) {
        const uploadedFile = {
          name: files[0].name,
          url: response.data.url, // Get URL from backend response
        };

        onFileUpload([uploadedFile]);
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Check server logs for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-area bounce" onClick={() => document.getElementById("file-input").click()}>
      <p>
        Drag & Drop files here or <span className="browse-btn">Browse</span>
      </p>
      <input type="file" id="file-input" hidden onChange={handleFileChange} />
      {uploading && <p className="uploading-text">Uploading...</p>}
    </div>
  );
};

export default FileUpload;
