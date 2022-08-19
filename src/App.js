import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import "./App.css";
import WithConvertContext from "./context/ConvertContext";
import WithLatestRates from "./context/LatestRates";
import Header from "./stories/Header/Header";
import Input from "./stories/Input/Input";
import Select from "./stories/Select/Select";


function App() {
  useEffect(() => {
    fetch("https://openexchangerates.org/api/latest.json?app_id=02ab4396e47b4123939aac1a82bbd845", {
      // app_id: "7fcdf9400ae74d1a9896e9bf5392a69a",
      AccessAllowControlOrigin: "*",
    })
      .then((response) => response.json())
      .then((result) => {
        const entries = Object.entries(result.rates)
        setRates(entries || []);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const [amount1, setAmount1] = useState();
  const [amount2, setAmount2] = useState();
  const [currency1, setCurrency1] = useState(1);
  const [currency2, setCurrency2] = useState(1);
  const [rates, setRates] = useState();

  const handleAmount1Change = (amount1) => {
    console.log(amount1)
    setAmount2((amount1 * currency2) / currency1);
    // setAmount2((amount1 * currency2) / 2);
    setAmount1(amount1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1((amount2 * currency1) / currency2);
    // setAmount1((amount2 * currency1) / 2);
    setAmount2(amount2);
  };

  const handleCurrency1Change = (currency1) => {
    if(isNaN(amount1)) {
      setAmount1(0)
      return
    }
    setAmount2((amount1 * currency2) / currency1)
    // setAmount2((amount1 * currency2) / 0.027);
    setCurrency1(currency1);
  };

  const handleCurrency2Change = (currency2) => {
    console.log(currency1)
    if(isNaN(amount2)) {
      setAmount2(0)
      return

    }
    setAmount1((amount2 * currency1) / currency2);
    // setAmount1((amount2 * currency1) / 0.027);
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
        // spacing={5}
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
