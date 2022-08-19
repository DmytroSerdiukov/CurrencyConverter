import React, { createContext, useEffect, useState } from "react";

const ConvertContext = createContext();


var myHeaders = new Headers();
myHeaders.append("apikey", "NSCd6Ggc8y2DHRtb5oDYq75krLBARfFz");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
const WithConvertContext = ({ children }) => {
    console.log('rates',rates)
    useEffect( () => {
        convert()
    }, [])

    const [rates, setRates] = useState()

    const convert = (to, from, amount) => {
        fetch("https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}", requestOptions)
        .then(response => response.json())
        .then(result => setRates(result))
        .catch(error => console.log('error', error));
    }

  return (
    <ConvertContext.Provider value={{rates}}>
        {children}
    </ConvertContext.Provider>
  );
};

export default WithConvertContext;
