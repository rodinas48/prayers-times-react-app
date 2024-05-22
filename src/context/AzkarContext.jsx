import { useState, createContext } from "react";
import data from "../azkar.json";
export const Context = createContext();
const AzkarContext = (props) => {
  const [selectedAzkar, setSelectedAzkar] = useState(data["أذكار الصباح"]);
   const handleAzkarBtn = (azkarName) => {
     setSelectedAzkar(data[azkarName]);
    
  };
  console.log(selectedAzkar);
  const contextValue = {
    selectedAzkar,
    handleAzkarBtn
  }
  // eslint-disable-next-line react/prop-types
  return <Context.Provider value={contextValue}>{ props.children}</Context.Provider>;
};

export default AzkarContext;
