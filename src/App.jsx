import { Box } from "@mui/material";
import "./App.css";
import Content from "./components/Content";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "#F3C98B",
      }}
    >
      <Content />
    </Box>
  );
}

export default App;
