import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.theme.colors.spinnerBorder}; /* Use theme color */
  border-radius: 50%;
  border-top: 2px solid ${props => props.theme.colors.spinnerTop}; /* Use theme color */
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => {
  return <SpinnerContainer />;
};

export default Spinner;