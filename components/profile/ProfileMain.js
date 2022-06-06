import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import ProfilePhoto from "../profile/ProfilePhoto";
import ProfileForm from "./ProfileForm";
import ProfileSubmitButton from "./ProfileSubmitButton";

const MyProfileMain = styled.main`
  background-color: #f0f1f3;
  width: 100%;
  min-height: 1650px;
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
  font-family: 'Montserrat', sans-serif;
  color: #292d34;
  text-align: center;
  margin-bottom: 80px;
`;

const ProfilePersonalBlock = styled.div`
  width: 650px;
  height: 716px;
  background: #ffffff;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 63px 150px;
  margin: 0 auto;
  margin-bottom: 80px;
`;

function ProfileMain() {
  return (
    <>
      <MyProfileMain>
        <Wrapper>
          <ProfileSection>
            <ProfileTitle>Профиль</ProfileTitle>
            <ProfilePhoto profileImage={"/profile-pic.jpg"} />
            <ProfilePersonalBlock>
              <ProfileForm />
              
            </ProfilePersonalBlock>
            <ProfileSubmitButton title="Сохранить"/>
          </ProfileSection>
        </Wrapper>
      </MyProfileMain>
    </>
  );
}

export default ProfileMain;
