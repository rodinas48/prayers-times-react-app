import { Divider, Grid } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context/Context";

const TimeSection = () => {
  const {
    nextPrayer,
    remainingTime,
    countryCode,
    city,
    timeNow,
    errorMsgAndLoading,
    loading,
    isError,
    date,
  } = useContext(Context);
  return (
    <Grid container sx={{ margin: "10px" }}>
      <Grid item xs={10} sm={5} >
        <div>
          {loading ? (
            errorMsgAndLoading
          ) : isError ? (
            errorMsgAndLoading
          ) : (
            <>
              {" "}
              <h2>
                {timeNow} <span className="sperator"> | </span>
                {date}{" "}
              </h2>
              <h1>
                {" "}
                {countryCode} - {city}
              </h1>
            </>
          )}
        </div>
      </Grid>
      <Divider
        orientation="vertical"
        sx={{
          background: "goldenrod",
          // marginX: "50px",
          padding:0.01,
           marginX: { xs: "-5px", sm: "50px" }, // No horizontal margin on xs
          marginY: { xs: "20px", sm: "0" }, // Vertical margin on xs
          width: { xs: "90%", sm: "1px" }, // Full width on xs
         
        }}
        flexItem
      />
      <Grid item xs={10} sm={4} md={5}>
        <div>
          {loading ? (
            errorMsgAndLoading
          ) : isError ? (
            errorMsgAndLoading
          ) : (
            <>
              <h2>
                Next prayer <span className="sperator"> : </span> {nextPrayer}{" "}
                in
              </h2>
              <h1>{remainingTime}</h1>
            </>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default TimeSection;
