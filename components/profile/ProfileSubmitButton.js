import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
const SubmitButton = styled.button`
  background: #fc5957;
  
  font-style: normal;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  padding-top: 3.5px;
  color: #ffffff;
  box-shadow: 0px 4px 10px -2px rgba(243, 129, 129, 0.8);
  border-radius: 10px;
  width: 287px;
  height: 69px;
  font-family: 'Montserrat', sans-serif;
  border: none;
  &:hover {
    background-color: #f94a47;
    cursor: pointer;
  }
  margin: 0 37.5%;
`;
function ProfileSubmitButton( {title}) {
  return <SubmitButton type="submit" title='Сохранить'>{title}</SubmitButton>;
}

export default ProfileSubmitButton;
