import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import intersect from "../public/Intersect1.svg";
import Script from "next/script";
const Mainerino = styled.main`
  max-width: 100%;
  position: relative;
  margin-top: 90px;
  background-color: #f1f2f4;
`;
const Wrapper2 = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  /* background-color: linear-gradient(
    213.75deg,
    rgba(241, 242, 244, 0.9) 0%,
    rgba(241, 242, 244, 0) 100%
  ); */
`;
const HomeSection = styled.section`
  width: 100%;
  min-height: 600px;
  position: relative;
`;
const HomeLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 550px;
  height: 100%;
  padding-top: 75px;
`;
const HomeTitle = styled.h1`
  color: #292d34;
  font-size: 40px;
  line-height: 1.12;
  margin-bottom: 35px;
  margin-top: 0px;
  word-spacing: 2px;
  letter-spacing: 0.7px;
  font-weight: 500;
`;
const HomeTitleFirstLetter = styled.span`
  color: rgba(252, 89, 87, 0.95);
  font-size: 48px;
  line-height: 1.12;
`;
const HomeDescription = styled.p`
  color: #646870;
  font-weight: 300;
  font-size: 20px;
  font-size: 20px;
  line-height: 140%; 
  display: inline-block;
  margin-bottom: 45px;
  word-spacing: 5px;
  letter-spacing: 0.1px;
  width: 570px;
`;
const HomeBtn = styled.button`
  width: 285px;
  height: 70px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  background-color: #fc5957;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 10px -2px rgba(243, 129, 129, 0.8);
  margin-right: 55px;
  transition: all 0.1s linear;
  &:hover {
    cursor: pointer;
    background-color: #f94a47;
    box-shadow: 0px 4px 12.5px -2px rgba(243, 129, 129, 0.8);
  }
`;
const HomeBtnHow = styled.span`
  display: inline-block;
  height: 30px;
  color: rgba(41, 45, 52, 0.85);
  font-size: 17px;
  background: url("/home__btn-how-logo.svg") no-repeat left center;
  padding-left: 35px;
  line-height: 30px;
  &:hover {
    cursor: pointer;
  }
  a {
    font-weight: 300;
    font-size: 17px;
  }
`;
const MainPhotoBlock = styled.div`
  width: 400px;
  height: 570px;
  position: absolute;
  bottom: 0;
  right: 75px;
`;

const MainBlob = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const CitationSection = styled.section`
  background-color: #fbfbfb;
  width: 100%;
  height: 400px;
  padding-top: 70px;
`;
const CitationPicBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 23px;
`;
const CitationTitle = styled.h2`
  color: #292d34;
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
`;
const CitationName = styled.p`
  color: #292d34;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
`;

const ReasonsSection = styled.section`
  background-color: #f1f2f4;
  width: 100%;
  padding-top: 130px;
  padding-bottom: 110px;
  height: 1000px;
`;
const ReasonsTitle = styled.h2`
  font-size: 40px;
  color: #292d34;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 500;
`;
const ReasonsDescription = styled.p`
  font-size: 26px;
  font-weight: 300;
  color: #000;
  margin-bottom: 80px;
  text-align: center;
  line-height: 1.5;
`;
const ReasonsGridOccasions = styled.div`
  margin: 0 auto;
  width: 892px;
  height: 430px;
  display: grid;
  gap: 38px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
const ReasonsGridOccasionsItem = styled.a`
  background-color: #ffffff;
  width: 271.95px;
  height: 193.78px;
  border-radius: 15px;
  box-shadow: 8px 0 16px 0 rgb(100 104 112 / 10%);
  grid-column: span 1;
  padding-top: 38px;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    cursor: pointer;
    color: #fc6967;
  }
`;
const ReasonsGridOccasionsItemTitle = styled.p`
  color: #585e6c;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  &:hover {
    color: #fc6967;
  }
`;

const ReasonsGridOccasionsItemPicBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 72.73px;
  margin-bottom: 19px;
`;
const HowSection = styled.section`
  width: 100%;
  height: 1000px;
  background-color: #fbfbfb;
  padding-top: 130px;
  padding-bottom: 175px;
`;
const HowSectionTitle = styled.h2`
  color: #292d34;
  font-size: 40px;
  text-align: center;
  margin-bottom: 44px;
  font-weight: 500;
`;
const HowSectionDescription = styled.p`
  font-size: 26px;
  font-weight: 300;
  color: #000;
  margin-bottom: 80px;
  text-align: center;
  line-height: 1.5;
`;
const HowSectionGridSteps = styled.div`
  display: grid;
  height: 400px;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 26.5px;
`;
const HowSectionGridStepsItem = styled.div`
  height: 395px;
  width: 280px;
  border-radius: 15px;
  background-color: ${(props) => props.bgc};
  grid-column: span 1;
  box-shadow: 0px 0px 20px ${(props) => props.shadow};
  position: relative;
  padding-top: 222px;
`;
const HowSectionGridStepsItemNumber = styled.img`
  position: absolute;
  top: 18px;
  left: 18px;
`;
const HowSectionGridStepsItemPic = styled.img`
  position: absolute;
  top: 98px;
  left: 90px;
`;
const HowSectionGridStepsItemTitle = styled.p`
  font-size: 18px;
  letter-spacing: 2%;
  color: #292d34;
  text-align: center;
  margin-bottom: 19px;
  font-weight: 500;
`;
const HowSectionGridStepsItemDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #646870;
  text-align: center;
`;
const VideoSection = styled.section`
  width: 100%;
  height: 957px;
  background-size: 100%;
  background: url("/Vectorbg.svg") no-repeat center;
  padding-top: 140px;
`;
const VideoSectionTitle = styled.h2`
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 93px;
  font-weight: 500;
`;
const VideoSectionVideoBlock = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
  position: relative;
`;
const VideoSectionVideoTitle = styled.h2`
  position: absolute;
  top: 45%;
  margin: 0 auto;
  font-size: 40px;
  color: #fff;
  z-index: 50;
  word-spacing: 5px;
  font-weight: 500;
`;
const Video = styled.video`
  border-radius: 15px;
  width: auto;
  height: auto;
  max-height: 100%;
  filter: brightness(0.5);
  /* position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

function Main() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/start");
  };
  return (
    //Плавное появление

    //MAIN START//
    <Mainerino>
      <div style={{ width: "1280px", position: "relative", margin: "0 auto" }}>
        <MainBlob>
          <Image src={intersect} width="553" height="460" alt="..." />
        </MainBlob>
      </div>

      <Wrapper2>
        {/* HOME SECTION START */}
        <HomeSection>
          <HomeLeft>
            <HomeTitle>
              <HomeTitleFirstLetter>Saluts </HomeTitleFirstLetter>
              – платформа
              <br />
              для создания групповых видеороликов в честь важных событий.
            </HomeTitle>
            <HomeDescription>
              Наша простая в использовании видеоплатформа позволяет запрашивать
              и объединять видеоролики для создания группового
              видеопоздравления.
            </HomeDescription>

            <div>
              <HomeBtn onClick={handleClick}>Попробовать Saluts</HomeBtn>
              <HomeBtnHow>
                <Link href="#how-does-it-work-section">
                  <a>Как это работает</a>
                </Link>
              </HomeBtnHow>
            </div>
          </HomeLeft>

          <MainPhotoBlock>
            <Image
              src="/main-photo.svg"
              alt="main-photo"
              width="400"
              height="570"
            />
          </MainPhotoBlock>
        </HomeSection>
        {/* HOME SECTION END */}
      </Wrapper2>
      {/* CITATION SECTION START */}
      <CitationSection>
        <Wrapper2>
          <CitationPicBlock>
            <Image src="/birds-icon.svg" width="128" height="128" alt="1" />
          </CitationPicBlock>
          <CitationTitle>В большом сердце и далекое близко</CitationTitle>
          <CitationName>М. Горький</CitationName>
        </Wrapper2>
      </CitationSection>
      {/* CITATION SECTION END */}

      {/* REASONS SECTION START */}
      <ReasonsSection>
        <Wrapper2>
          <ReasonsTitle>Подойдет любой повод для видеоподарка</ReasonsTitle>
          <ReasonsDescription>
            Saluts поможет Вам создать видеоролик
            <br />
            для любого случая.
          </ReasonsDescription>

          <ReasonsGridOccasions>
            <ReasonsGridOccasionsItem href="/">
              <ReasonsGridOccasionsItemPicBlock>
                <Image
                  src="/reasons-cake.svg"
                  width="72"
                  height="72.73"
                  alt="1"
                />
              </ReasonsGridOccasionsItemPicBlock>

              <ReasonsGridOccasionsItemTitle>
                День рождения
              </ReasonsGridOccasionsItemTitle>
            </ReasonsGridOccasionsItem>

            <ReasonsGridOccasionsItem href="/">
              <ReasonsGridOccasionsItemPicBlock>
                <Image
                  src="/reasons-wedding.svg"
                  width="72"
                  height="72.73"
                  alt="1"
                />
              </ReasonsGridOccasionsItemPicBlock>
              <ReasonsGridOccasionsItemTitle>
                Свадьба
              </ReasonsGridOccasionsItemTitle>
            </ReasonsGridOccasionsItem>

            <ReasonsGridOccasionsItem href="/">
              <ReasonsGridOccasionsItemPicBlock>
                <Image
                  src="/reasons-anniversary.svg"
                  width="72"
                  height="72.73"
                  alt="1"
                />
              </ReasonsGridOccasionsItemPicBlock>
              <ReasonsGridOccasionsItemTitle>
                Свадьба
              </ReasonsGridOccasionsItemTitle>
            </ReasonsGridOccasionsItem>

            <ReasonsGridOccasionsItem href="/">
              <ReasonsGridOccasionsItemPicBlock>
                <Image
                  src="/reasons-graduate.svg"
                  width="72"
                  height="72.73"
                  alt="1"
                />
              </ReasonsGridOccasionsItemPicBlock>
              <ReasonsGridOccasionsItemTitle>
                Выпуск
              </ReasonsGridOccasionsItemTitle>
            </ReasonsGridOccasionsItem>

            <ReasonsGridOccasionsItem href="/">
              <ReasonsGridOccasionsItemPicBlock>
                <Image
                  src="/reasons-promotion.svg"
                  width="69.62"
                  height="72.6"
                  alt="1"
                />
              </ReasonsGridOccasionsItemPicBlock>
              <ReasonsGridOccasionsItemTitle>
                Карьерный рост
              </ReasonsGridOccasionsItemTitle>
            </ReasonsGridOccasionsItem>

            <ReasonsGridOccasionsItem href="/">
              <ReasonsGridOccasionsItemPicBlock>
                <Image
                  src="/reasons-table.svg"
                  width="69.62"
                  height="70.87"
                  alt="1"
                />
              </ReasonsGridOccasionsItemPicBlock>
              <ReasonsGridOccasionsItemTitle>
                Благодарность
              </ReasonsGridOccasionsItemTitle>
            </ReasonsGridOccasionsItem>
          </ReasonsGridOccasions>
        </Wrapper2>
      </ReasonsSection>
      {/* REASONS SECTION END */}

      {/* HOW DOES IT WORKS SECTION START*/}
      <HowSection id="how-does-it-work-section">
        <Wrapper2>
          <HowSectionTitle>Как работает Saluts?</HowSectionTitle>
          <HowSectionDescription>
            Создание видеопоздравления – это быстро,
            <br />
            весело и легко!
          </HowSectionDescription>
          <HowSectionGridSteps>
            <HowSectionGridStepsItem bgc={"#EDEDED"} shadow={"#EDEDED"}>
              <HowSectionGridStepsItemNumber
                src="/Vector1.svg"
                alt="1"
                width="40"
                height="40"
              />
              <HowSectionGridStepsItemPic
                src="/create.svg"
                width="100"
                height="100"
                alt="1"
              />
              <HowSectionGridStepsItemTitle>
                Создайте проект
              </HowSectionGridStepsItemTitle>
              <HowSectionGridStepsItemDescription>
                Войдите в аккаунт или нажмите
                <br />
                “Попробовать Saluts”
              </HowSectionGridStepsItemDescription>
            </HowSectionGridStepsItem>
            <HowSectionGridStepsItem bgc={"#E1F2FF"} shadow={"#E1F2FF"}>
              <HowSectionGridStepsItemNumber
                src="/Vector2.svg"
                alt="1"
                width="40"
                height="40"
              />
              <HowSectionGridStepsItemPic
                src="/invite.svg"
                width="100"
                height="100"
                alt="1"
              />
              <HowSectionGridStepsItemTitle>
                Пригласите друзей
              </HowSectionGridStepsItemTitle>
              <HowSectionGridStepsItemDescription>
                Пригласите друзей и <br />
                родственников присоединиться
                <br />к поздравлению
              </HowSectionGridStepsItemDescription>
            </HowSectionGridStepsItem>
            <HowSectionGridStepsItem bgc={"#FFEFDC"} shadow={"#FFEFDC"}>
              <HowSectionGridStepsItemNumber
                src="/Vector3.svg"
                alt="1"
                width="40"
                height="40"
              />
              <HowSectionGridStepsItemPic
                src="/collect.svg"
                width="100"
                height="100"
                alt="1"
              />
              <HowSectionGridStepsItemTitle>
                Соберите видеоролики
              </HowSectionGridStepsItemTitle>
              <HowSectionGridStepsItemDescription>
                Каждому предлагается
                <br />
                загрузить свое видео
              </HowSectionGridStepsItemDescription>
            </HowSectionGridStepsItem>
            <HowSectionGridStepsItem bgc={"#CFEBE5"} shadow={"#CFEBE5"}>
              <HowSectionGridStepsItemNumber
                src="/Vector4.svg"
                alt="1"
                width="40"
                height="40"
              />
              <HowSectionGridStepsItemPic
                src="/edit.svg"
                width="100"
                height="100"
                alt="1"
              />
              <HowSectionGridStepsItemTitle>
                Составьте поздравление
              </HowSectionGridStepsItemTitle>
              <HowSectionGridStepsItemDescription>
                Перетаскивайте видео в<br />
                нужном порядке, чтобы
                <br />
                создать замечательное
                <br />
                поздравление!
              </HowSectionGridStepsItemDescription>
            </HowSectionGridStepsItem>
          </HowSectionGridSteps>
        </Wrapper2>
      </HowSection>

      {/* HOW DOES IT WORKS SECTION END*/}

      {/* VIDEO SECTION START*/}
      <VideoSection>
        <VideoSectionTitle>
          Создавайте чудесные видеоподарки
          <br />
          вместе с Saluts
        </VideoSectionTitle>

        <VideoSectionVideoBlock>
          <VideoSectionVideoTitle>Дарите эмоции</VideoSectionVideoTitle>
          <Video src="/skate.mp4" autoPlay loop muted />
        </VideoSectionVideoBlock>
      </VideoSection>
      {/* VIDEO SECTION END*/}
    </Mainerino>
  );
}

export default Main;
