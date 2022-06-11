import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  position: absolute;
  top: 280px;
  transition: all 0.2s ease-in-out;
  background: #f1f2f4;
  border-radius: 6px;
  margin-left: 55px;
  width: 500px;
  height: 48px;
  padding: 18px 16px;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  border: none;
  font-size: 15px;
  margin-top: 38px;
  color: rgba(0, 0, 0, 0.8);
  &::placeholder {
    font-weight: 300;
    color: rgba(86, 96, 107, 0.6);
  }
`;
const OccasionInput = ({customOccasion, setCustomOccasion}) => {
  
  return (
    <>
      <Input
        id="occasionInput"
        type="text"
        name="customOccasion"
        value={customOccasion}
        placeholder="Введите название события"
        onChange={(e) => setCustomOccasion(e.target.value)}
      />
    </>
  );
};
export default OccasionInput;
