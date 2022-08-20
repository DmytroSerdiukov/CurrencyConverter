import { createContext, useEffect, useState } from "react";
import * as axios from 'axios'

export const LatestRatesContext = createContext()

const myHeaders = new Headers();
myHeaders.append("apikey", "qeUEC9JoJMhxtV0nRrxqJZs6Lj5W4ayK");

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
        fetch("https://api.apilayer.com/fixer/latest?symbols=uah&base=usd", requestOptions)
        .then(response => response.json())
        .then(result => {
            setUSD(result.rates.UAH.toFixed(2))
        })
        .catch(error => console.log('error', error));
    }

    const fetchEuroLatestRate = async() => {
        fetch("https://api.apilayer.com/fixer/latest?symbols=uah&base=EUR", requestOptions)
        .then(response => response.json())
        .then(result => {
            setEUR(result.rates.UAH.toFixed(2))
        })
        .catch(error => console.log('error', error));
    }



    return <LatestRatesContext.Provider value={{USD, EUR}}>
        {children}
    </LatestRatesContext.Provider>
}

export default WithLatestRates