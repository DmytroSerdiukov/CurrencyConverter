import { IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import { US, EU, AE} from "country-flag-icons/react/3x2";

function Input({
    label,
    error,
    currencyIcon,
    amount,
    onHandleAmount,
    ...props
}) {

    const [val, setValue] = useState(amount || '')

    const onValueChange = (e) => {
        // let value = parseFloat(e.target.value)
        // console.log(typeof value, value)
        // if (isNaN(value))
        //     value = 0
        onHandleAmount(e.target.value)
        // setValue(value)

    }

    const onHandleBlur = (e) => {
        // let v = e.target.value.replace(/\D\s/g, '')
        // console.log(e)
        // if (isNaN(v))
        //     v = 0
        // setValue(v)
    }

    return (
        <TextField
            sx={{
                width: 250,
                marginTop: 3,
            }}
            focused={true}
            value={amount}
            error={error}
            helperText={error || 'Enter currency value. Use only numbers'}
            inputProps={{ inputMode: 'numeric' }}
            type={'numeric'} 
            label={'Value'}
            onChange = {onValueChange}
            // onBlur={onHandleBlur}
            {...props}
        />
    );
}

export default Input;