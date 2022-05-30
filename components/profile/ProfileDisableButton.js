import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
const SubmitButton = styled.button`
  background: #cccccc;
  font-family: "Gotham Pro";
  font-style: normal;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 19px;
  line-height: 20px;
  padding-top: 3.5px;
  color: #838383;
  box-shadow: 0px 4px 10px -2px #d7d9de;
  border-radius: 10px;
  width: 287px;
  height: 69px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  margin: 0 37.5%;
`;
function ProfileSubmitButton({ title }) {
  return (
    <SubmitButton type="submit" title={title}>
      {title}
    </SubmitButton>
  );
}

export default ProfileSubmitButton;
