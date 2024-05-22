/* eslint-disable react-hooks/exhaustive-deps */
import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import moment from "moment";

export const Context = createContext();
const ContextProvider = (props) => {
  const [countryCode, setCountryCode] = useState("");
  const [city, setCity] = useState("");
  const [tempCountryCode, setTempCountryCode] = useState("EG");
  const [tempCity, setTempCity] = useState("Cairo");
  const [timeZone, setTimeZone] = useState("Africa/Cairo");
  const [timeNow, setTimeNow] = useState("");
  const [loading, setLoading] = useState(false);
  const [timings, setTimings] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
  });
  const [nextPrayer, setNextPrayer] = useState("");
  const [remainingTime, setRemainingTime] = useState("");

  const [date, setDate] = useState("");
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const errorMsgAndLoading = (
    <Stack
      direction={"row"}
      sx={{
        height: "15vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isError ? error : <CircularProgress color="inherit" />}
    </Stack>
  );
  const getTimings = async () => {
    setLoading(true);
    setError(null);
    setIsError(false);
    try {
      const response = await axios.get(
        `http://api.aladhan.com/v1/timingsByCity?city=${tempCity}&country=${tempCountryCode}`
      );
      if (response.status == 200) {
        const data = response.data.data.timings;
        const filteredTimings = {
          Fajr: data.Fajr,
          Dhuhr: data.Dhuhr,
          Asr: data.Asr,
          Maghrib: data.Maghrib,
          Isha: data.Isha,
        };
        setTimeZone(response.data.data.meta.timezone);
        setTimings(filteredTimings);
        setDate(response.data.data.date.readable);
        setCountryCode(tempCountryCode);
        setCity(tempCity);
      }
    } catch (e) {
      setError(
        <p style={{ color: "rgb(255, 177, 177)" }}>Unable to Find Data !</p>
      );
      setIsError(true);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // Get the current date and time in the target timezone
  const currentTimeInTargetTimezone = new Date().toLocaleString("en-US", {
    timeZone: timeZone,
  });
  //convert time to moment obj
  const currentTime = moment(currentTimeInTargetTimezone);

  useEffect(() => {
    getTimings();
  }, []);
  // update next prayer timer and current time
  useEffect(() => {
    const timeNow = currentTime.format("LT");
    setTimeNow(timeNow);
    const timer = setInterval(() => {
      nextPrayerCounter();
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime, timings]);

  const nextPrayerCounter = () => {
    //get current Time "string"
    const momentNowString = currentTime.format("HH:mm:ss");
    // get current Time "moment obj"
    const momentNowObj = moment(momentNowString, "HH:mm::ss");
    let difference = null;
    let nextPrayer = null;
    let min = Infinity;
    // iterate over prayers times obj
    for (const [name, time] of Object.entries(timings)) {
      // get each prayer time "moment obj"
      const prayerTimeMoment = moment(time, "HH:mm");

      // difference operation on each prayer time and current time
      difference = prayerTimeMoment.diff(momentNowObj);
      if (difference < 0) {
        difference += 24 * 60 * 60 * 1000;
        // Add 24 hours in milliseconds
      }
      if (difference >= 0 && difference < min) {
        min = +difference;
        nextPrayer = name;
      }
    }
    if (!nextPrayer) {
      nextPrayer = "Fajr";
      // if (difference < 0) {
      //   difference += 24 * 60 * 60 * 1000;
      //   // Add 24 hours in milliseconds
      // }
      min = difference;
    }
    // the next prayer in millisecs (moment obj)
    const remainTime = moment.duration(min, "milliseconds");
    // console.log(remainTime);
    const hours = String(remainTime.hours()).padStart(2, "0");
    const minutes = String(remainTime.minutes()).padStart(2, "0");
    const seconds = String(remainTime.seconds()).padStart(2, "0");
    const formattedRemainingTime = `${hours}:${minutes}:${seconds}`;

    setRemainingTime(formattedRemainingTime);
    setNextPrayer(nextPrayer);
  };

  const contextValue = {
    city,
    countryCode,
    setTempCountryCode,
    setTempCity,
    timings,
    setCountryCode,
    setCity,
    error,
    isError,
    loading,
    getTimings,
    errorMsgAndLoading,
    date,
    timeNow,
    nextPrayer,
    remainingTime,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
