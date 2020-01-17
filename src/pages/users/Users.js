import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

import { withLDConsumer } from 'launchdarkly-react-client-sdk';

const datatableData = [
  ["Guilherme Santos Bolado", "guilherme.dsantos@creditas.com.br"],
  ["Capitão América", "capitaoamerica@avengers.com"],
  ["Samuel Vacilão", "samuel.costa@creditas.com.br"],
  ["Tony Stark", "tonystark@avengers.com"],
];

function Users(props) {
  const { flags } = props;

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Users"
            data={datatableData}
            columns={["Name", "E-mail"]}
            options={flags.usersTableOptions ? {} : {
              filterType: "select",
              filter:false,
              sort:false,
              search:false,
              print:false,
              download:false
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default withLDConsumer()(Users);
