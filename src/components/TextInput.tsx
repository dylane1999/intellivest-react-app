import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  createTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import { textTheme } from "../themes";

const styles = {
  input: {
    color: "#FFFFFF",
  },
};

interface ITextInput {
  classes: any;
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  label: string
  padding: string
  width: string
  height: string
  hasError?: boolean
  type:string

}

const TextInput = (props: ITextInput) => {
  const { classes } = props;

  return (
    <ThemeProvider theme={textTheme}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        required
        label={props.label}
        color="primary"
        value={props.value}
        type={props.type}
        onChange={(event) => props.setValue(event.target.value)}
        InputProps={{
          className: classes.input,
        }}
        error={props.hasError}
        style={{ width: `${props.width}`, height: `${props.height}`, padding: `${props.padding}`  }}
      />
    </ThemeProvider>
  );
};

export default withStyles(styles)(TextInput);
