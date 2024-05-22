import { Button, Grid } from "@mui/material";
import { Context } from "../../context/AzkarContext";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
const AzkarBtn = ({ label, index }) => {
  const { handleAzkarBtn } = useContext(Context);
  
  return (
    <Grid
      item
      xs={7}
      sm={6}
      md={5}
      lg={3}
      sx={{ textAlign: "center", margin: "auto" }}
    >
      <Button
        style={{ width: "100%" }}
        className="azkarBtn"
        id={index}
        onClick={() => handleAzkarBtn(label)}
      >
        {label}
      </Button>
    </Grid>
  );
}

export default AzkarBtn