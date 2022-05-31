import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import ProjectsItem from "./ProjectsItem";
const Headerino = styled.header`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 5;
  background-color: #fbfbfb;
  box-shadow: 0 0 20px rgb(112 119 138 / 20%);
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;
const HeaderinoChild = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;
const HeaderLogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
`;
const HeaderNav = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 42px;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  font-size: 16px;
  font-weight: 300;
  line-height: 15px;
  font-family: 'Gotham Pro';

  color: #1b1a1a;
  a {
    transition: 0.1s all linear;
  }
  a:hover {
    color: #fc5957;
  }
  li {
    display: inline-block;
    cursor: pointer;
    font-family: 'Gotham Pro';
  }
`;
const HeaderBtn = styled.button`
  background-color: #fc5957;
  width: 150px;
  height: 46px;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Gotham Pro';
  font-weight: 500;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 4px 12px -2px rgba(243, 129, 129, 0.8);
  transition: 0.1s all linear;
  z-index: 11;
  &:hover {
    background-color: #f94a47;
    cursor: pointer;
  }
`;

function MyProjectsHeader({ profilePic }) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/start");
  };

  return (
    <Headerino>
      <Wrapper>
        <HeaderinoChild>
          <HeaderLogoDiv>
            <Link href="/">
              <a style={{ width: "135px" }}>
                <Image src="/logo.svg" alt="logo" width="135" height="50" />
              </a>
            </Link>
          </HeaderLogoDiv>

          <HeaderNav>
            <Nav>
              <Ul>
                <li style={{ marginRight: "42px" }}>События</li>
                <li style={{ height: "38px" }}>
                  <div
                    style={{ width: "38px", height: "38px" }}
                    className="dropdown"
                  >
                    <Image
                      src={profilePic}
                      width="38"
                      height="38"
                      unoptimized="true"
                      quality="100"
                      style={{ borderRadius: "5px" }}
                    />
                    <div className="dropdown-content">
                      <Link href="/profile">
                        <a>Профиль</a>
                      </Link>
                      <hr />
                      <Link href="/projects">
                        <a style={{ marginTop: "20px" }}>Проекты</a>
                      </Link>
                      <hr />
                      <Link href="login">
                        <a style={{ marginTop: "20px" }}>Выход</a>
                      </Link>
                    </div>
                  </div>
                </li>
              </Ul>
            </Nav>
            <HeaderBtn onClick={handleClick}>Новый проект</HeaderBtn>
          </HeaderNav>
        </HeaderinoChild>
      </Wrapper>
    </Headerino>
  );
}

export default MyProjectsHeader;
