import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import WithLatestRates from "./context/LatestRates";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

function App() {

  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [currency1, setCurrency1] = useState(36.79);
  const [currency2, setCurrency2] = useState(1);
  const [rates, setRates] = useState([
    ["Ukrainian Hrivnya", 36.79],
    ["United States Dollar", 1],
    ["Euro", 1.2],
  ]);

  const handleAmount1Change = (amount1) => {
    if (currency1 === currency2) {
      setAmount2(amount1);
      setAmount1(amount1);
      return;
    }
    setAmount2((amount1 * currency2) / currency1);
    setAmount1(amount1);
  };

  const handleCurrency1Change = (currency1) => {
    if (currency1 === currency2) {
      setAmount2(amount2);
      setAmount1(amount2);
      setCurrency1(currency1);
      return;
    }
    setAmount1((amount2 * currency1) / currency2);
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    if (currency1 === currency2) {
      setAmount2(amount2);
      setAmount1(amount2);
      return;
    }
    setAmount1((amount2 * currency1) / currency2);
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    if (currency2 === currency1) {
      setCurrency2(currency2);
      setAmount2(amount1);
      setAmount1(amount1);
      return;
    }
    setAmount2((amount1 * currency2) / currency1);
    setCurrency2(currency2);
  };

  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        height: "100vh",
      }}
    >
      <WithLatestRates>
        <Header />
      </WithLatestRates>
      <Grid
        container
        item
        sx={{
          paddingTop: 10,
          width: 1024,
          height: "100vh",
          background: "#fff",
        }}
        justifyContent={"center"}
        alignItems={"flex-start"}
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
          <Typography sx={{marginBottom: 5}} component={'span'}>Changing</Typography>
          <Select
            currency={currency1}
            rates={rates}
            onCurrencyHandle={handleCurrency1Change}
            defaultValue={36.79}
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
          <Typography sx={{marginBottom: 5}} component={'span'}>Get</Typography>
          <Select
            currency={currency2}
            rates={rates}
            onCurrencyHandle={handleCurrency2Change}
            defaultValue={1}

          />
          <Input amount={amount2} onHandleAmount={handleAmount2Change} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
