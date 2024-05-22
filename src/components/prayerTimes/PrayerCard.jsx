import { Box, Grid, Typography } from "@mui/material";
// eslint-disable-next-line react/prop-types
const PrayerCard = ({ img, name, time }) => {
  return (
    <Grid item xs={6} sm={5} md={3} lg={ 2.4} sx={{ textAlign: "center"}}className="card">
      <div >
        <img src={img} alt="" />
        <Box className="prayerTime-Name">
          <Typography variant="h6" component={"h2"} className="prayerName">
            {name}
          </Typography>
          <Typography variant="paragraph">{time}</Typography>
        </Box>
      </div>
    </Grid>
  );
};

export default PrayerCard;
