import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import ContextProvider from "./context/Context";
import Azkar from "./pages/AzkarPage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prayer-times" element={<PrayerTimes />} />
          <Route path="/azkar" element={<Azkar />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
