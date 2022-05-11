import RegForm from "./login-form/RegForm";
import Image from "next/image";
import styled from "styled-components";
const Regino = styled.div`
  background-color: #f1f2f4;
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Reg() {
  return (
    <Regino>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
          alignItems: "center",
        }}
      >
        <Image src="/logo.svg" alt="logo" width="135" height="50" />
      </div>
      <RegForm title="Регистрация" />
    </Regino>
  );
}

export default Reg;
