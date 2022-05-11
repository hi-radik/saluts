import styled from "styled-components";
import Link from "next/link";
const RegisterForm = styled.form`
  background: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 550px;
  height: 450px;
  padding-top: 60px;
  input {
    background-color: #f1f2f4;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    font-weight: 300;
    width: 400px;
    height: 50px;
    border: none;
    //border: 1px solid #E3E5E9;
    margin-bottom: 10px;
    border-radius: 5px;
    transition: all 0.1s linear;
    padding: 14px;
    padding-top: 16px;
    color: #2a2d34;
    &:hover {
      //border: 1px solid #2A2D34;
    }
  }
  button {
    margin-top: 5px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    letter-spacing: 0.7px;
    font-size: 16px;
    width: 400px;
    height: 50px;
    border: none;
    background-color: #fc6967;
    transition: all 0.1s linear;
    border-radius: 5px;
    color: white;
    margin-bottom: 30px;
    &:hover {
      color: #000;
      cursor: pointer;
      background-color: #95e1d3;
    }
  }
  p {
    font-family: "Roboto", sans-serif;
    color: #858a92;
    font-size: 14px;
    a {
      font-family: "Roboto", sans-serif;
      color: #fc6967;
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

function RegForm({ title }) {
  return (
    <>
      <RegisterForm method="post">
        <h2
          style={{
            marginBottom: "30px",
            color: "#2A2D34",
            fontSize: "24px",
            fontWeight: "300",
            fontFamily: "Gotham Pro",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            style={{ width: "195px", height: "45px" }}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            style={{ width: "195px", height: "45px" }}
          />
        </div>

        <input type="text" name="email" placeholder="Электронная почта" />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
          }}
        >
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            style={{ width: "195px", height: "45px" }}
          />
          <input
            type="password"
            name="repeatPassword"
            placeholder="Повторите пароль"
            style={{ width: "195px", height: "45px" }}
          />
        </div>

        <button type="submit">Продолжить</button>
        <p>
          Уже есть аккаунт?{" "}
          <Link href="/login">
            <a>Войдите</a>
          </Link>
        </p>
      </RegisterForm>
    </>
  );
}

export default RegForm;
