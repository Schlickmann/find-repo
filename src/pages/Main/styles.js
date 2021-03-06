import styled, { keyframes, css } from 'styled-components';
import { FaSyncAlt } from 'react-icons/fa';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  & > div.flex-child {
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
  }
`;

export const FieldSection = styled.div`
  flex: 1;
  width: 100%;
  height: 50px;
  position: relative;
  overflow: hidden;

  input {
    width: 100%;
    height: 100%;
    color: #5fa8d3;
    padding-top: 20px;
    border: none;
  }

  input:focus + label > span,
  input:valid + label > span {
    transform: translateY(-150%);
    font-size: 12px;
    color: #5fa8d3;
  }

  input:focus + label::after,
  input:valid + label::after {
    transform: translateX(0);
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  border-bottom: 1px solid #222;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #5fa8d3;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  span {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: all 0.3s ease;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background-color: #5fa8d3;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #1c749c;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
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

export const SyncIcon = styled(FaSyncAlt).attrs({
  color: '#fff',
  size: 14,
})`
  ${props =>
    props.loading &&
    css`
      animation: ${rotate} 2s linear infinite;
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px dotted #eee;
    }

    a {
      color: #1c749c;
      text-decoration: none;
    }
  }
`;
