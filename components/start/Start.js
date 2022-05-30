import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import ProfileSubmitButton from "../profile/ProfileSubmitButton";
import ProfileDisableButton from "../profile/ProfileDisableButton";
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
  position: relative;
  display: flex;
  width: 775px;
  height: 250px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  padding: 48px 50px;
  align-items: flex-start;

  div {
    margin-top: 9px;
    max-width: 500px;
    height: 140;
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
  h2 {
    font-weight: 300;
    font-size: 24px;
    line-height: 23px;
    margin-bottom: 43px;
    color: #000000;
  }
  label {
    font-weight: 300;
    font-size: 16px;
    line-height: 15px;
    margin-bottom: 12px;

    color: #646870;
  }
  input {
    background: #f1f2f4;
    border-radius: 6px;
    width: 500px;
    height: 48px;
    padding: 18px 16px;
    font-weight: 300;
    border: none;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.8);
    &::placeholder {
      font-weight: 300;
      color: rgba(86, 96, 107, 0.6);
    }
  }
`;
const StartinoSecondStep = styled.div`
  width: 775px;
  height: 450px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 41px;
  display: flex;
  flex-wrap: wrap;
  padding: 48px 50px;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-weight: 300;
    font-size: 24px;
    line-height: 23px;
    color: #000000;
    margin-top: 9px;
    margin-left: 15px;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 17px;
    margin: 0 auto;
    color: rgba(88, 94, 108, 0.77);
    margin-bottom: 20px;
  }
`;
const Step2Div = styled.div`
  display: flex;
  align-items: flex-start;
  width: 300px;
  margin-bottom: 40px;
`;
const StartinoItems = styled.div`
  width: 506px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 55px;
  margin-bottom: 58px;
`;
function Start() {
  const [forWho, setForWho] = useState("");
  const [occasionType, setOccasionType] = useState("");
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

      <StartinoFirstStep>
        {forWho.length >= 2 ? (
          <Image
            src="/circle-step-done.svg"
            alt="step1"
            width="40"
            height="40"
            style={{ transition: "all .3s ease-in-out" }}
          />
        ) : (
          <Image
            src="/circle-step1.svg"
            alt="step1"
            width="40"
            height="40"
            style={{ transition: "all .3s ease-in-out" }}
          />
        )}

        <div>
          <h2>Для кого видеопоздравление?</h2>
          <label htmlFor="forWho">Имя получателя</label>
          <input
            type="text"
            name="forWho"
            id="forWho"
            value={forWho}
            onChange={(e) => setForWho(e.target.value)}
            placeholder="Введите имя получателя"
          />
        </div>
      </StartinoFirstStep>

      <StartinoSecondStep>
        <Step2Div>
          {occasionType ? (
            <Image
              src="/circle-step-done.svg"
              alt="step1"
              width="40"
              height="40"
              style={{ transition: "all .3s ease-in-out" }}
            />
          ) : (
            <Image src="/circle-step2.svg" alt="step2" width="40" height="40" />
          )}

          <h2>По какому поводу?</h2>
        </Step2Div>
        <StartinoItems>
          <div className="form_radio_btn">
            <input
              id="radio-1"
              type="radio"
              name="radio"
              value="День рождения"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-1">День рождения</label>
          </div>

          <div className="form_radio_btn">
            <input
              id="radio-2"
              type="radio"
              name="radio"
              value="Свадьба"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-2">Свадьба</label>
          </div>

          <div className="form_radio_btn">
            <input
              id="radio-3"
              type="radio"
              name="radio"
              value="Годовщина"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-3">Годовщина</label>
          </div>

          <div className="form_radio_btn">
            <input
              id="radio-4"
              type="radio"
              name="radio"
              value="Выпуск"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-4">Выпуск</label>
          </div>

          <div className="form_radio_btn">
            <input
              id="radio-5"
              type="radio"
              name="radio"
              value="Выздоровление"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-5">Выздоровление</label>
          </div>

          <div className="form_radio_btn">
            <input
              id="radio-6"
              type="radio"
              name="radio"
              value="Благодарность"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-6">Благодарность</label>
          </div>

          <div className="form_radio_btn">
            <input
              id="radio-7"
              type="radio"
              name="radio"
              value="Карьерный рост"
              onChange={(e) => setOccasionType(e.target.value)}
            />
            <label htmlFor="radio-7">Карьерный рост</label>
          </div>
        </StartinoItems>
        <p>Больше поводов</p>
        <div style={{ margin: "0 auto" }}>
          <Image src="/down-arrow.svg" width="15" height="7.5" />
        </div>
      </StartinoSecondStep>
      { forWho.length >= 2 && occasionType ? <ProfileSubmitButton title="Продолжить" /> : <ProfileDisableButton title='Продолжить'/>}
      
    </Startino>
  );
}

export default Start;
