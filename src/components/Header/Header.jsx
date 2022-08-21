import React, { useContext } from "react";

import { Grid, Typography } from "@mui/material";
import { US, EU } from "country-flag-icons/react/3x2";

import { LatestRatesContext } from "../../context/LatestRates";

const UsdToHrn = ({ rate }) => {
  return (
    <div>
      <US width={48} />
      <Typography component={'p'} style={{ margin: 0, textAlign: 'center' }}>{rate}</Typography>
    </div>
  );
};

const EuroToHrn = ({ rate }) => {
  return (
    <div>
      <EU width={48} style={{ padding: 0 }} />
      <Typography component={'p'} style={{ margin: 0, textAlign: 'center' }}>{rate}</Typography>
    </div>
  );
};

function Header(props) {
  const { EUR, USD } = useContext(LatestRatesContext);

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#000",
        color: '#fff'
      }}
      height={100}
      justifyContent={"center"}
      alignItems={"center"}
      xs={12}
    >
      <Grid container item justifyContent={"center"} xs={4} sm={2}>
        <UsdToHrn rate={USD} />
      </Grid>
      <Grid container item justifyContent={"center"} xs={4} sm={2}>
        <EuroToHrn rate={EUR} />
      </Grid>
    </Grid>
  );
}

export default Header;
