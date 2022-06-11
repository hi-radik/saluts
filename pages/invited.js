import Head from "next/head";
import DownBlock from "../components/invitedUserRef/DownBlock";
import InvitedHeader from "../components/invitedUserRef/InvitedHeader";
import UpperBlock from "../components/invitedUserRef/UpperBlock";

const invited = () => {
  return (
    <>
      <InvitedHeader />
      <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', height:'100vh',paddingTop:'80px'}}>
        <UpperBlock recipientName={'Гордей'} occasionType={'День рождения'}/>
        <DownBlock />
      </div>
    </>
  );
};
export default invited;
