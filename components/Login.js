import styled from "styled-components";
import Image from "next/image";
import Form from "./login-form/Form";
const Logino = styled.div`
  background-color: #f1f2f4;
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Login() {
  return (
    <>
      <Logino>
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

        <Form />
      </Logino>
    </>
  );
}

export default Login;
