import Head from "next/head";
import MyProjectsHeader from "../components/projects/MyProjectsHeader";
import ReferenceBlock from "../components/reference-page/ReferenceBlock";
import styled from "styled-components";
const RefBlock = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
      <MyProjectsHeader profilePic={"/profile-pic.jpg"} />
      <RefBlock><ReferenceBlock
        inviteRef={"www.saluts-teamp.vercel.app/invite/sadjh34hgasdhgashd3"}
      /></RefBlock>
      
    </>
  );
}

export default MyReference;
