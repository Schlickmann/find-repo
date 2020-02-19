import styled, { keyframes, css } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

export const Loading = styled.div`
  color: #222;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(FaSpinner).attrs({
  color: '#222',
  size: 30,
})`
  margin-right: 1rem;
  ${props =>
    props.loading &&
    css`
      animation: ${rotate} 2s linear infinite;
    `}
`;
