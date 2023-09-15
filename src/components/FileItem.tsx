import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import CloseIcon from "@mui/icons-material/Close";
import { blue } from "@mui/material/colors";
import formatBytes from "../utils/formatBytes";
interface Props {
  fileName: string;
  fileSize: number;
  onCloseClick?: () => void;
}
const FileItem: React.FC<Props> = ({ fileName, fileSize, onCloseClick }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ "&:hover": { color: "#ff6060" } }}
          onClick={onCloseClick}
        >
          <CloseIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: blue[600] }}>
          <DescriptionIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={fileName} secondary={formatBytes(fileSize)} />
    </ListItem>
  );
};

export default FileItem;
