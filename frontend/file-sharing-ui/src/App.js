import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";
import AnimatedBackground from "./components/AnimatedBackground";
import "./styles.css";

const App = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (uploadedFiles) => {
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="app">
      <AnimatedBackground />
      <div className="container">
        <h1 className="fade-in">File Sharing System</h1>
        <FileUpload onFileUpload={handleFileUpload} />
        <FileList files={files} />
      </div>
    </div>
  );
};

export default App;
