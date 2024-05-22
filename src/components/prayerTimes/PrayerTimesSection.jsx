import { Grid } from "@mui/material";
import PrayerCard from "./PrayerCard";
import duhr from "../../assets/weather_11774504.png";
import fajr from "../../assets/weather_11774491.png";
import asr from "../../assets/asr.png";
import maghrb from "../../assets/beach_11774520.png";
import isha from "../../assets/crescent-moon_5276665.png";
import { Context } from "../../context/Context";
import { useContext } from "react";
const PrayerTimesSection = () => {
  const { timings, errorMsgAndLoading} = useContext(Context);
  // check if data loaded from axios
  const isTimingsLoaded =
    timings &&
    timings.Fajr &&
    timings.Dhuhr &&
    timings.Asr &&
    timings.Maghrib &&
    timings.Isha;
  return (
    <>
      {/* if data not loaded yet show loading spinner .. */}
      {!isTimingsLoaded ? (
      errorMsgAndLoading

      ) : (
        <Grid container spacing={1} className="cardContainer">
          <PrayerCard time={timings.Fajr} img={fajr} name="Fajr" />
          <PrayerCard time={timings.Dhuhr} img={duhr} name="Dhuhr" />
          <PrayerCard time={timings.Asr} img={asr} name="Asr" />
          <PrayerCard time={timings.Maghrib} img={maghrb} name="Maghrib" />
          <PrayerCard time={timings.Isha} img={isha} name="Isha" />
        </Grid>
      )}
    </>
  );
};

export default PrayerTimesSection;
