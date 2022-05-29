import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfilePhotoSection = styled.div`
  width: 256px;
  height: 256px;
  margin: 0 auto;
  margin-bottom: 80px;
  background-color: #f1f2f4;
  box-shadow: 8px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &:hover .some .some2 {
    cursor: pointer;
    filter: brightness(0.7);
  }
  &:hover .some .hover-edit-pic {
    cursor: pointer;
    filter: brightness(1);
  }
`;

function ProfilePhoto({ profileImage }) {
  return (
    <>
      <ProfilePhotoSection className="edit">
        <Link href="#">
          <a>
            <div
              style={{ position: "relative", borderRadius: "10px" }}
              className="some"
            >
              <Image
                src={profileImage}
                width={256}
                height={256}
                style={{
                  borderRadius: "10px",
                }}
                className="some2"
              />
              <div className="hover-edit-pic">
                <Image src="/profileImage.svg" width={93} height={93} />
              </div>
            </div>
          </a>
        </Link>
      </ProfilePhotoSection>
    </>
  );
}

export default ProfilePhoto;
