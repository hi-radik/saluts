import styled from "styled-components";
import Image from "next/image";
const Wrapper = styled.div`
  padding: 0 40px;
  max-width: 1280px;
  margin: 0 auto;
`;
const UpperBlockDiv = styled.div`
  width: 1200px;
  height: 180px;
  background: #fbfbfb;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 68px 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 30px;
  /* margin-top: 130px; */
  div {
    display: flex;
    max-height: 60px;
    h3 {
      margin-left: 15px;
      font-weight: 400;
      font-size: 28px;
      line-height: 0px;

      color: #000000;
      span {
        color: rgba(252, 105, 103, 1);
      }
    }
  }
`;
const UpperBlock = ({recipientName, occasionType}) => {
  return (
    <Wrapper>
      <UpperBlockDiv>
        <div>
          <Image
            src="/inviteRecordMini.svg"
            width={32}
            height={32}
            className="invitedRefImg"
          />
          <h3>
            Получатель: <span>{recipientName}</span>
          </h3>
        </div>

        <div>
          <Image
            src="/inviteOccasionMini.svg"
            width={32}
            height={32}
            className="invitedRefImg"
          />
          <h3>
            Событие: <span>{occasionType}</span>
          </h3>
        </div>
      </UpperBlockDiv>
    </Wrapper>
  );
};
export default UpperBlock;
