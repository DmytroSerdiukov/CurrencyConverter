import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import WithConvertContext from "./context/ConvertContext";
import WithLatestRates from "./context/LatestRates";
import Header from "./stories/Header/Header";
import Input from "./stories/Input/Input";
import Select from "./stories/Select/Select";


const myHeaders = new Headers();
myHeaders.append("apikey", "qeUEC9JoJMhxtV0nRrxqJZs6Lj5W4ayK");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function App() {

  // change api to fixer /latest endpoint
  useEffect(() => {
    fetch("https://api.apilayer.com/fixer/latest?app_id=02ab4396e47b4123939aac1a82bbd845", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const entries = Object.entries(result.rates)
        console.log(entries)
        console.log(entries[0][1])
        console.log(entries[1][1])
        setRates(entries || []);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const [amount1, setAmount1] = useState();
  const [amount2, setAmount2] = useState();
  const [currency1, setCurrency1] = useState();
  const [currency2, setCurrency2] = useState();
  const [rates, setRates] = useState([['UAH', 36.5], ['USD', 1], ['GBP', 1.2]]);

  console.log(currency1, currency2)

  const handleAmount1Change = (amount1) => {
    if (currency1 === currency2) {
      setAmount2(amount1)
      setAmount1(amount1)
      return
    }
    // setAmount1(amount2 * currency1 / currency2);
    setAmount2(amount1 * currency2 / currency1);
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    if (currency1 === currency2) {
      setAmount2(amount2)
      setAmount1(amount2)
      setCurrency1(currency1);
      return
    }
    setAmount2(amount2 * currency2 / currency1)
    console.log('currency1', amount1, currency2, currency1)

    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    if (currency1 === currency2) {
      setAmount2(amount2)
      setAmount1(amount2)
      return
    }
    setAmount1(amount2 * currency1 / currency2);
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    if (currency2 === currency1) {
      setCurrency2(currency2);
      setAmount2(amount1)
      setAmount1(amount1)
      return
    }
    // console.log('currency2', amount2, currency1, currency2)
    setAmount2(amount1 * currency2 / currency1)
    setCurrency2(currency2);
  };

  // const convert = useContext(WithConvertContext);

  return (
    <Grid container justifyContent={"center"} sx={{
      height: '100vh'
    }}>
      <WithLatestRates>
        <Header />
      </WithLatestRates>
      <Grid
        container item
        sx={{paddingTop: 10, width: 1024, height: '100vh', background: '#fff' }}
        justifyContent={"center"}
        alignItems={'flex-start'}
      >
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Select
            currency={currency1}
            rates={rates}
            onCurrencyHandle={handleCurrency1Change}
          />
          <Input amount={amount1} onHandleAmount={handleAmount1Change} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Select
            currency={currency2}
            rates={rates}
            onCurrencyHandle={handleCurrency2Change}
          />
          <Input amount={amount2} onHandleAmount={handleAmount2Change} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
