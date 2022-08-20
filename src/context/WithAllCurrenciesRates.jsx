import { createContext, useEffect, useState } from "react"

export const CurrencyRates = createContext()

const myHeaders = new Headers();
myHeaders.append("apikey", "qeUEC9JoJMhxtV0nRrxqJZs6Lj5W4ayK");

const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

const WithAllCurrencyRates = ({children}) => {

    const [rates, setRates] = useState()

    useEffect( () => {
        fetch("https://api.apilayer.com/fixer/latest?app_id=02ab4396e47b4123939aac1a82bbd845", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const entries = Object.entries(result.rates)
        setRates(entries || []);
      })
      .catch((error) => console.log("error", error));
    }, [])


    return <CurrencyRates.Provider value={{rates}}>
        {children}
    </CurrencyRates.Provider>
}

export default WithAllCurrencyRates