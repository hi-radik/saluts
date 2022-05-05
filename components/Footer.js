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
`;
function Footer() {
  return (
    <Footerino>
      <Wrapper2>
        <Wrapper2>
          <Link href="/">
            <a style={{ width: "150px" }}>
              <Image src="/logo.svg" alt="logo" width="150" height="50" />
            </a>
          </Link>
        </Wrapper2>
      </Wrapper2>
    </Footerino>
  );
}

export default Footer;
