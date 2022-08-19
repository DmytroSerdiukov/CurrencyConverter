import { createContext, useEffect, useState } from "react";
import * as axios from 'axios'

export const LatestRatesContext = createContext()

const myHeaders = new Headers();
myHeaders.append("apikey", "NSCd6Ggc8y2DHRtb5oDYq75krLBARfFz");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const WithLatestRates = ({children}) => {

    useEffect( () => {
        fetchDollarLatestRate()
        fetchEuroLatestRate()
    }, [])

    const [USD, setUSD] = useState('-')
    const [EUR, setEUR] = useState('-')

    const fetchDollarLatestRate = async() => {
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=uah&base=USD", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.rates.UAH.toFixed(2))
            setUSD(result.rates.UAH.toFixed(2))
        })
        .catch(error => console.log('error', error));
        // setUSD(dollar)
    }

    const fetchEuroLatestRate = async() => {
        fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=uah&base=EUR", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.rates.UAH)
            setEUR(result.rates.UAH.toFixed(2))
        })
        .catch(error => console.log('error', error));
    }



    return <LatestRatesContext.Provider value={{USD, EUR}}>
        {children}
    </LatestRatesContext.Provider>
}

export default WithLatestRates