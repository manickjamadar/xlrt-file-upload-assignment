import { Button, Grid, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import React, { useRef } from "react";
interface Props {
  onUploadFiles?: (files: File[]) => void;
}
const UploadBox: React.FC<Props> = ({ onUploadFiles }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const files = [...e.target.files];
    onUploadFiles && onUploadFiles(files);
  };
  return (
    <Grid
      container
      rowSpacing={2}
      direction="column"
      alignItems="center"
      sx={{
        border: "1px dashed #a9a9a9",
        width: "80%",
        margin: "0 auto 40px",
        maxWidth: "430px",
        padding: "20px",
        borderRadius: "4px",
        backgroundColor: "rgba(169,169,169,0.08)",
      }}
    >
      <Grid item>
        <FileUploadOutlinedIcon htmlColor="#a9a9a9" sx={{ fontSize: "48px" }} />
      </Grid>
      <Grid item>
        <Typography
          sx={{ fontSize: "12px", fontWeight: 500, color: "#939393" }}
          align="center"
        >
          Upload Single or Multiple Files
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          onClick={() => inputRef.current?.click()}
          disableElevation
        >
          Browse
        </Button>
        <input
          ref={inputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </Grid>
    </Grid>
  );
};

export default UploadBox;
