import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import ProjectsItem from "../projects/ProjectsItem";

const MyProfileMain = styled.main`
  background-color: #f0f1f3;
  width: 100%;
  min-height: 1100px;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;
const ProfileSection = styled.section`
  padding-top: 170px;
  display: block;
`;
const ProfileTitle = styled.h2`
  font-size: 40px;
  font-family: "Gotham Pro";
  color: #292d34;
  text-align: center;
  margin-bottom: 80px;
`;

const ProjectsProjectsGirdSectionItem = styled.div`
  grid-column: span 1;
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s linear;
  &:hover {
    cursor: pointer;
    opacity: 0.93;
  }
  p {
    font-size: 24px;
    font-family: "Gotham Pro";
    font-weight: 300;
    text-align: center;
  }
`;

function ProfileMain() {
  return (
    <>
      <MyProfileMain>
        <Wrapper>
          <ProfileSection>
            <ProfileTitle>Профиль</ProfileTitle>
          </ProfileSection>
        </Wrapper>
      </MyProfileMain>
    </>
  );
}

export default ProfileMain;
