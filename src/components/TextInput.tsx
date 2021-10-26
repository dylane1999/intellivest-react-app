import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createTheme, ThemeProvider, withStyles } from "@material-ui/core/styles";
import { textTheme } from "../theme";



const styles = {
  input: {
    color: "#FFFFFF",
  },
};

const TextInput = (props: any) => {
  const {classes} = props
  return (
    <ThemeProvider theme={textTheme}>
    <TextField
      id="outlined-basic"
      variant="outlined"
      required
      label="Email"
      color="primary"
      InputProps={{
        className: classes.input,
      }}
      style={{ width: "200px", margin: "20px" }}
    />
    </ThemeProvider>
  );
}

export default withStyles(styles)(TextInput);

