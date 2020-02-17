import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;

export const FieldSection = styled.div`
  flex: 1;
  width: 50%;
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
