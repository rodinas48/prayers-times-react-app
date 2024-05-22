import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../countries";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function CountrySelect() {
  const { setTempCountryCode } = useContext(Context);

  const handleCountryChange = (e, selectedOption) => {
    if (selectedOption) {
      setTempCountryCode(selectedOption.code);
    } else {
      setTempCountryCode(""); // Clear the country code if no option is selected
    }
  };
  return (
    <>
      <Autocomplete
        className="countryInput"
        id="country-select-demo"
        sx={{ width: 300 }}
        onChange={handleCountryChange}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.code}
        renderOption={(props, option) => (
          <Box
            // eslint-disable-next-line react/prop-types
            key={props.id}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />
    </>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
