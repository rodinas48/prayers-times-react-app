import { Stack, Paper, Typography, Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AzkarContext";
const AzkarContent = () => {
  const { selectedAzkar } = useContext(Context);
  const [counter, setCounter] = useState([]);
    useEffect(() => {
      setCounter(selectedAzkar.map((azkar) => azkar.count));
    }, [selectedAzkar]);
  const handleCount = (index) => {
    setCounter((prev) => {
      const newCounts = [...prev];
      if (newCounts[index] > 0) {
        newCounts[index]--;
      }
      return newCounts;
    });
  };

  return (
    <>
      <Stack spacing={2} sx={{ marginBottom: 10 }}>
        {selectedAzkar.map((azkar, index) => {
          return (
            <Paper elevation={5} key={index} className="azkarCard">
              <Typography variant="h2" className="azkarContent">
                {azkar.content}
              </Typography>
              <Typography variant="paragraph" className="azkarCaption">
                {azkar.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleCount(index)}
                className={counter[index] == 0 ? "zeroCounter" : ""}
              >
                {counter[index]}
              </Button>
            </Paper>
          );
        })}
      </Stack>
    </>
  );
};

export default AzkarContent;
