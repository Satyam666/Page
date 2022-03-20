import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import { PropTypes } from '@mui/material';
// import styled from '@emotion/styled';
import './stepper.css'

const steps = [
  'Light',
  '',
  'Medium',
  '',
  'Heavy'
];



function stepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper  alternativeLabel>
        {steps.map((label) => (
          <Step className='level' key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default stepper;