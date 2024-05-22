import { Container, Grid, Divider } from "@mui/material";
import AzkarBtn from "../components/azkar/AzkarBtn";
import data from ".././azkar.json";
import logo from "../assets/text-1716300178822.png";
import "../components/azkar/azkar.css";
import AzkarContent from "../components/azkar/AzkarContent";
import AzkarContext from "../context/AzkarContext";

const Azkar = () => {
  let azkarNames = Object.keys(data); // Get an array of Azkar names (keys)

  return (
    <AzkarContext>
      <Container fixed className="azkarContainer" sx={{ marginY: 2 }}>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <img src={logo} alt="" />
        </div>
        <Grid container spacing={1}>
          {azkarNames.map((azkarName, index) => {
            return <AzkarBtn label={azkarName} key={index} />;
          })}
        </Grid>
        <Divider
          orientation="vertical"
          sx={{
            backgroundColor: "rgb(116, 87, 15)",

            width: "80%",
            margin: "auto",
            padding: 0.01,
            marginY: "50px",
          }}
          flexItem
        />
        <AzkarContent  />
      </Container>
    </AzkarContext>
  );
};

export default Azkar;
