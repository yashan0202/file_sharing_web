import React from "react";
import "../styles.css";

const FileList = ({ files }) => {
  const handleCopyLink = (url) => {
    navigator.clipboard.writeText(url);
    alert("Download link copied to clipboard!");
  };

  return (
    <div className="file-list">
      <h2>Uploaded Files</h2>
      <ul>
        {files.length > 0 ? (
          files.map((file, index) => (
            <li key={index}>
              <span>{file.name}</span>
              <button className="copy-btn" onClick={() => handleCopyLink(file.url)}>📋 Copy Link</button>
              <a href={file.url} target="_blank" rel="noopener noreferrer" className="download-btn">⬇ Download</a>
            </li>
          ))
        ) : (
          <p>No files uploaded yet.</p>
        )}
      </ul>
    </div>
  );
};

export default FileList;
