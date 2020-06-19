import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps {
  loading: number;
}

export const Container = styled.button<ButtonProps>`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s, opacity 0.4s;

  opacity: ${props => (props.loading ? '0.6' : '1')};
  pointer-events: ${props => (props.loading ? 'none' : 'auto')};

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IconLoading = styled(FaSpinner)`
  animation: ${rotate} 2s infinite;
`;
