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

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    color: #1c749c;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      display: block;
      width: 100%;
      font-size: 1rem;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #1c749c;
        }
      }

      span {
        background-color: #eefbff;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }

  div.labels {
    margin-top: 5px;
    margin-left: 0;

    span:first-child {
      margin-left: 0;
    }
  }
`;
