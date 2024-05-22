import { Container, Divider } from "@mui/material";
import TimeSection from "../components/prayerTimes/TimeSection";
import "../components/prayerTimes/PrayerTimes.css";
import PrayerTimesSection from "../components/prayerTimes/PrayerTimesSection";
import SearchForm from "../components/prayerTimes/Search-form";

function PrayerTimes() {
  return (
    <Container className="container">
      <SearchForm />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ backgroundColor: "grey", marginY: "20px" }}
      />
      <TimeSection />
      <Divider
        orientation="horizontal"
        flexItem
        sx={{ backgroundColor: "grey", marginY: "20px" }}
      />

      <PrayerTimesSection />
    </Container>
  );
}

export default PrayerTimes;
