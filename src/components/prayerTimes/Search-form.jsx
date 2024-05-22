import CountrySelect from "./SearchInput";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { useContext } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Context } from "../../context/Context";
const SearchForm = () => {
 const {  loading, getTimings, setTempCity } =
   useContext(Context);
   const handleSubmit = async () => {
     await getTimings();
   };
  return (
    <Box className="searchInputs-header" sx={{ gap: 2}} >
      <CountrySelect />
      <TextField id="outlined-basic" label="City" variant="outlined" onChange={(e)=>setTempCity(e.target.value)} required />
      <LoadingButton
        className={!loading ? "searchBtn" : ""}
        size="small"
        onClick={handleSubmit}
        loading={loading}
        variant="contained"
        sx={{paddingX:3 ,paddingY:1.5,alignSelf:"center"}}
      >
        <span style={loading ? { color: "transparent" } : null}>Search</span>
      </LoadingButton>
    </Box>
  );
};

export default SearchForm;
