import Head from "next/head";
import ProfileMain from "../components/profile/ProfileMain";
import MyProjectsHeader from "../components/projects/MyProjectsHeader";
function MyProfile() {
  return (
    <>
      <Head>
        
        <title>Saluts: Профиль</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <MyProjectsHeader profilePic={"/profile-pic.jpg"} />
      <ProfileMain />
    </>
  );
}

export default MyProfile;
