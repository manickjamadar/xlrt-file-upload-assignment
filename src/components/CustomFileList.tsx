import { Box, Divider, List, Typography } from "@mui/material";
import FileItem from "./FileItem";
import React from "react";
interface Props {
  list: File[];
  onFileCloseClick?: (file: File) => void;
}
const CustomFileList: React.FC<Props> = ({ list, onFileCloseClick }) => {
  return (
    <Box sx={{ width: "80%", maxWidth: "600px", margin: "auto" }}>
      <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "#757575" }}>
        Total Files:{" "}
        <Typography
          component="span"
          sx={{ color: "green", fontSize: "14px", fontWeight: 500 }}
        >
          {list ? list.length : 0}
        </Typography>
      </Typography>
      {list && list.length > 0 ? (
        <List>
          {[...list].reverse().map((file) => (
            <React.Fragment key={file.name}>
              <FileItem
                fileName={file.name}
                fileSize={file.size}
                onCloseClick={() => onFileCloseClick && onFileCloseClick(file)}
              />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography
          align="center"
          sx={{ padding: "20px", color: "#757575", fontSize: "20px" }}
        >
          No files Available
        </Typography>
      )}
    </Box>
  );
};

export default CustomFileList;
