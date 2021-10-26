
import { createTheme, withStyles } from "@material-ui/core/styles";


export const textTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        "& $notchedOutline": {
          borderColor: "#FFFFFF"
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#5559AF",
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderColor: "#5559AF"
          }
        }
      }
    },
    MuiFormLabel: {
      root: {
        // "&$focused": {
        color: "#FFFFFF"
        // }
      }
    }
  }
});
