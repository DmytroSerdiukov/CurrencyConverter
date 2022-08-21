import React from "react";
import {
  MenuItem,
  TextField,
} from "@mui/material";

function Select({ label, rates, onCurrencyHandle, currency, defaultValue, ...props }) {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    onCurrencyHandle(event.target.value);
  };

  return (
    <>
      <TextField
        {...props}
        sx={{
          width: 250,
        }}
        value={value || defaultValue}
        onChange={handleChange}
        select // tell TextField to render select
        label="Currency"
        helperText="Select a currency you need"
      >
        {rates
          ? rates.map((rate, i) => (
              <MenuItem
                key={i}
                value={rate[1]}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {rate[0]}
              </MenuItem>
            ))
          : null}
      </TextField>
    </>
  );
}

export default Select;
