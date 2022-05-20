import Head from "next/head";
import MyProjectsHeader from "../components/projects/MyProjectsHeader";
import MyProjectsMain from "../components/projects/MyProjectsMain";
function MyProjects() {
  return (
    <>
      <Head>
        <title>Saluts: Мои проекты</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <MyProjectsHeader />
      <MyProjectsMain/>
    </>
  );
}

export default MyProjects;
