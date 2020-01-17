import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

import Themes from "./themes";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";


(async () => {
  const config = {
    clientSideID: '5defd84224344f085674739d',
  };

  if (!!localStorage.getItem('id_token')) {
      config.user = {
        "key": localStorage.getItem('key'),
        "name": localStorage.getItem('key')
      };
  }

  console.log(config);

  const LDProvider = await asyncWithLDProvider(config);
  
  ReactDOM.render(
    <LDProvider>
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
    </LDProvider>,
    document.getElementById("root"),
  );
})();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
