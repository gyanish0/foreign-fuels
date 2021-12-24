import { Box } from "@material-ui/core";
import "./App.css";
// import Featured from "./Components/Featured";
import Banner from "./Components/Banner";
import Ourfe from "./Components/Ourfe";
import Sale from "./Components/Sale";
import Upcoming from "./Components/Upcoming";
function App() {
  return (
    <Box>
      <Banner />
      <Ourfe />
      {/* <Featured /> */}
      <Upcoming />
      <Sale />
    </Box>
  );
}

export default App;
