import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  padding: 0 40px;
  max-width: 1280px;
  margin: 0 auto;
`;
const DownBlockDiv = styled.div`
  width: 583px;
  height: 300px;
  background: #fbfbfb;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    div {
      background: rgba(241, 242, 244, 0.8);;
      margin-bottom: 20px;
      transition: all 0.1s linear;
      &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }

      border-radius: 10px;
      width: 200px;
      height: 200px;
    }

    .camera-block {
      background: rgba(241, 242, 244, 0.8) url("/camera-black.svg") no-repeat center center;
      &:hover {
        background: rgba(241, 242, 244, 0.8) url("/camera-red.svg") no-repeat center center;
      }
    }
    .upload-block {
      background: rgba(241, 242, 244, 0.8) url("/upload-black.svg") no-repeat center center;
      &:hover {
        background: rgba(241, 242, 244, 0.8) url("/upload-red.svg") no-repeat center center;
      }
    }
    p {
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      line-height: 19px;
      color: #414141;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

const DownBlock = () => {
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1200px",
          margin: "0 auto",
        }}
      >
        <DownBlockDiv>
          <div>
            <div className="camera-block"></div>
            <p>Записать видео</p>
          </div>
        </DownBlockDiv>
        <DownBlockDiv>
          <div>
            <div className="upload-block"></div>
            <p>Загрузить видео</p>
          </div>
        </DownBlockDiv>
      </div>
    </Wrapper>
  );
};
export default DownBlock;
