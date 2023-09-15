import { Typography, Container } from "@mui/material";

import CustomFileList from "./components/CustomFileList";
import UploadBox from "./components/UploadBox";
import { useState } from "react";
function App() {
  const [files, setFiles] = useState<File[]>([]);
  const handleUploadFiles = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };
  const handleFileRemoval = (file: File) => {
    setFiles((oldFiles) =>
      oldFiles.filter((oldFile) => oldFile.name !== file.name)
    );
  };
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h5" align="center" marginBottom={3}>
        File Upload
      </Typography>
      <UploadBox onUploadFiles={handleUploadFiles} />
      <CustomFileList list={files} onFileCloseClick={handleFileRemoval} />
    </Container>
  );
}

export default App;
