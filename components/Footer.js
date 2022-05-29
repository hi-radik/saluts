import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Footerino = styled.footer`
  width: 100%;
  height: 400px;
  background-color: #fbfbfb;
  padding-top: 47.5px;
  padding-bottom: 25px;
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
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const FooterList = styled.ul`
  max-width: 150px;
  margin-left: 135px;
  padding-top: 25px;
`;
const FooterListItem = styled.li`
  font-size: 16px;
  color: #292d34;
  line-height: 2;
  font-weight: 300;
`;
const FooterAllRights = styled.p`
  color: #858a92;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
  font-weight: 300;
`;
function Footer() {
  return (
    <Footerino>
      <Wrapper2>
        <Link href="/">
          <a style={{ width: "135px" }}>
            <Image src="/logo.svg" alt="logo" width="135" height="50" />
          </a>
        </Link>
        <FooterList>
          <FooterListItem>
            <span style={{ color: "#FC6967" }}>События</span>
          </FooterListItem>
          <FooterListItem>
            <Link href="/">
              <a>День рождения</a>
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link href="/">
              <a>Свадьба</a>
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link href="/">
              <a>Годовщина</a>
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link href="/">
              <a>Выпуск</a>
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link href="/">
              <a>Карьерный рост</a>
            </Link>
          </FooterListItem>
          <FooterListItem>
            <Link href="/">
              <a>Благодарность</a>
            </Link>
          </FooterListItem>
        </FooterList>
        <FooterAllRights>
          Saluts team 2022.
          <br />
          Все права защищены.
        </FooterAllRights>
      </Wrapper2>
    </Footerino>
  );
}

export default Footer;
