import * as React from 'react';
import {Slider} from '@mui/material';

export default function MySlider() {
  return (
    <Slider
      defaultValue={30}
      sx={{
        width: 300,
        color: 'red',
      }}
    />
  );
}
