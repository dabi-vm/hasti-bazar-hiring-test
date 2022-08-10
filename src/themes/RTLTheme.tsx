// import React from "react";
// import {
//   createMuiTheme,
//   StylesProvider,
//   ThemeProvider,
//   jssPreset,
// } from "@material-ui/core/styles";
// import { create } from "jss";
// // import rtl from "jss-rtl";
// import { faIR } from "@material-ui/core/locale";
// import { CssBaseline } from "@material-ui/core";

// // const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
// const theme = createMuiTheme(
//   {
//     direction: "rtl",
//   },
//   faIR
// );

const RTLTheme: React.FC = (props) => {
  return (
    <div></div>
    // <StylesProvider jss={jss}>
    //   <CssBaseline />
    //   <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    // </StylesProvider>
  );
};
export default RTLTheme;
