import Head from "next/head";
import MyProjectsHeader from '../components/projects/MyProjectsHeader'
import ReferenceBlock from "../components/reference-page/ReferenceBlock";

function MyReference() {
  return (
    <>
      <Head>
        <title>Saluts: Поделитесь ссылкой с близкими!</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
        <MyProjectsHeader profilePic={'/profile-pic.jpg'}/>
        <ReferenceBlock inviteRef={'www.saluts-teamp.vercel.app/invite/sadjh34hgasdhgashd3'}/>

    </>
  );
}

export default MyReference;
