import React, { useEffect } from "react";
import { InputLabel, MenuItem, Select as MUISelect, TextField } from "@mui/material";
import { AE } from "country-flag-icons/react/3x2";

function Select({ label, rates, onCurrencyHandle, currency, ...props }) {
  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
    onCurrencyHandle(event.target.value)
    // console.log(event.target.value)
  };

  return (
    <>
      <TextField
        {...props}
        sx={{
            width: 250,
        }}
        value={value || ""}
        onChange={handleChange}
        select // tell TextField to render select
        label="Currency"
        helperText="Select a currency you need"
      >
        {rates ? rates.map( (rate, i) => 
        <MenuItem
          key={i}
          value={rate[1]}
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {rate[0]}
        </MenuItem>): null}
        
      </TextField>
    </>
  );
}

export default Select;
