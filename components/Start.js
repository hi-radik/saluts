import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Startino = styled.div`
  background-color: #f1f2f4;
  width: 100%;
  height: 1700px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StartinoFirstStep = styled.div`
  width: 775px;
  height: 250px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;
const StartinoSecondStep = styled.div`
  width: 775px;
  height: 500px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;
const StartinoThirdStep = styled.div`
  width: 775px;
  height: 575px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
`;
function Start() {
  return (
    <Startino>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <Image src="/logo.svg" alt="logo" width="150" height="50" />
      </div>

      <StartinoFirstStep></StartinoFirstStep>

      <StartinoSecondStep></StartinoSecondStep>

      <StartinoThirdStep></StartinoThirdStep>
    </Startino>
  );
}

export default Start;
