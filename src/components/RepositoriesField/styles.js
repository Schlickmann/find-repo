import styled from 'styled-components';

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

  button {
    background-color: #cf1322;
    color: #fff;
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 16px;
    height: 16px;
    border: none;
    border-radius: 50%;
    outline: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:valid ~ button {
    opacity: 1;
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

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
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
`;

export const SelectFieldWrapper = styled.div`
  width: 100%;
  position: relative;

  ul {
    list-style: none;
    text-align: left;
    position: absolute;
    left: 0;
    width: 100%;
    max-height: 200px;
    overflow: auto;
    border: ${props => (props.emptyList ? 'none' : '')};

    li {
      padding: 10px 5px;
      cursor: pointer;
      border-bottom: 1px dotted #ccc;
      background-color: ${props => (props.active ? '#f0f0f0' : '#fff')};

      &:last-child {
        border-bottom: none;
        border-radius: 0 0 5px 5px;
      }

      &:hover {
        background-color: #b5f5ec;
      }
    }
  }

  ul::before {
    content: '';
  }
`;
