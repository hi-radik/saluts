import Image from "next/image";
import styled from "styled-components";

const RefDiv = styled.div`
  height: 70px;
  max-width: 1000px;
  background: rgba(217, 217, 217, 0.2);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all .1s linear;
  &:hover {
    box-shadow: 0px 0px 20px rgba(88, 183, 140, .7);
    span {
      color: rgba(0, 0, 0, .8);
    }
      
  }
  span {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 32px;
    line-height: 31px;
    /* identical to box height */

    text-align: center;

    color: rgba(33, 33, 33, 0.55);
  }
`;
const Reference = ({inviteRef}) => {
  return (
      <RefDiv>
        <span>{inviteRef}</span>
      </RefDiv>
  );
};
export default Reference;
