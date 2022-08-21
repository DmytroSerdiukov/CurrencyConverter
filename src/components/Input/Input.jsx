import { TextField } from "@mui/material";
import React from "react";

function Input({
  label,
  error,
  amount,
  onHandleAmount,
  ...props
}) {
  const onValueChange = (e) => {
    const pattern = /^([0-9]*\.{0,1}[0-9]*)$/;
    if (pattern.test(e.target.value)) onHandleAmount(e.target.value);
  };

  return (
    <TextField
      sx={{
        width: 250,
        marginTop: 3,
      }}
      focused={true}
      value={amount}
      helperText={"Enter currency value. Use only numbers"}
      inputProps={{ inputMode: "numeric" }}
      type={"numeric"}
      label={"Value"}
      onChange={onValueChange}
      {...props}
    />
  );
}

export default Input;
