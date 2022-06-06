import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileFormino = styled.form`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    height: 16px;
    label {
        margin-bottom: 0;
        padding-top: 2.5px;
        padding-left: 5px;
    }
  }
  span {
    margin: 0 auto;
    margin-bottom: 15px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 15px;

    color: #292d34;
  }
  label {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 15px;
    margin-bottom: 12px;

    color: #292d34;
  }
  input[type="text"] {
    background: #f1f2f4;
    border-radius: 6px;
    width: 350px;
    height: 48px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 15px;
    padding-left: 12px;
    padding-top: 5px;
    margin-bottom: 28px;
    color: #292d34;
    &:nth-child(4) {
      margin-bottom: 40px;
    }
  }
`;
function ProfileForm() {
  return (
    <>
      <ProfileFormino>
        <label htmlFor="profileName">Имя</label>
        <input
          type="text"
          name="profileName"
          id="profileName"
          placeholder="Введите ваше имя"
        />

        <label htmlFor="profileName">Фамилия</label>
        <input
          type="text"
          name="profileSurname"
          id="profileSurname"
          placeholder="Введите вашу фамилию"
        />

        <span>Пол</span>
        <div>
          <div>
            <input type="radio" name="sex" id="profileSex" />
            <label htmlFor="sex">Мужской</label>
          </div>

          <div>
            <input type="radio" name="sex" id="profileSex" />
            <label htmlFor="sex">Женский</label>
          </div>
        </div>

        <label htmlFor="profileCity">Город</label>
        <input
          type="text"
          name="profileCity"
          id="profileCity"
          placeholder="Введите ваш город"
        />

        <label htmlFor="profileName">Новый пароль</label>
        <input
          type="text"
          name="profilePassword"
          id="profilePassword"
          placeholder="Введите новый пароль"
        />

        <label htmlFor="profileName">Подтвердите новый пароль</label>
        <input
          type="text"
          name="profilePasswordRepeat"
          id="profilePasswordRepeat"
          placeholder="Введите новый пароль еще раз"
        />
      </ProfileFormino>
    </>
  );
}

export default ProfileForm;
