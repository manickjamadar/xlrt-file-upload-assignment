function formatBytes(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  } else if (bytes < 1024 * 1024) {
    const kb = (bytes / 1024).toFixed(2);
    return `${kb} KB`;
  } else if (bytes < 1024 * 1024 * 1024) {
    const mb = (bytes / (1024 * 1024)).toFixed(2);
    return `${mb} MB`;
  } else {
    const gb = (bytes / (1024 * 1024 * 1024)).toFixed(2);
    return `${gb} GB`;
  }
}
export default formatBytes;
