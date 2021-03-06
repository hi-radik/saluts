import styled from "styled-components";
import Link from "next/link";
const LoginForm = styled.form`
  background: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  width: 550px;
  height: 413px;
  padding-top: 60px;
  input {
    background-color: #f1f2f4;
    font-size: 15px;
    font-weight: 300;
    width: 400px;
    height: 50px;
    border: none;
    //border: 1px solid #E3E5E9;
    margin-bottom: 15px;
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
    font-weight: 500;
    letter-spacing: 0.7px;
    font-size: 16px;
    width: 400px;
    height: 50px;
    font-family: 'Montserrat', sans-serif;
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
    color: #858a92;
    font-size: 14px;
    a {
      color: #fc6967;
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

function Form({ title }) {
  return (
    <>
      <LoginForm method="post" action="http://localhost:3000/api">
        <h2
          style={{
            marginBottom: "30px",
            color: "#2A2D34",
            fontSize: "24px",
            fontWeight: "300",
            fontFamily: "Montserrat",
          }}
        >
          {title}
        </h2>
        <input type="text" name="login" placeholder="Электронная почта" />
        <label htmlFor="login"></label>
        <input type="password" name="password" placeholder="Пароль" />
        <label htmlFor="password"></label>
        <button type="submit">Продолжить</button>
        <p>
          Еще нет аккаунта? <Link href='/reg'><a>Зарегистрируйтесь</a></Link>
        </p>
      </LoginForm>
    </>
  );
}

export default Form;
