import Image from "next/image";
import styled from "styled-components";
import Reference from "./Reference";

const MyReferenceBlock = styled.div`
  display: flex;
  width: 1200px;
  height: 500px;
  background: #FBFBFB;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 99px;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 195px;
 
  
  h2 {
    font-family: "Gotham Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 38px;

    color: #000000;
  }
  p {
    font-family: "Gotham Pro";
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 34px;

    color: #000000;
  }
`;
const ReferenceBlock = ({inviteRef}) => {
  return (
    <MyReferenceBlock>
      <Image src="/inviteImage.svg" width={48} height={48} alt="invite-photo" />
      <h2>Отлично!</h2>
      <p>Поделитесь ссылкой с друзьями и близкими</p>
      <Reference inviteRef={inviteRef} />
    </MyReferenceBlock>
  );
};
export default ReferenceBlock;
