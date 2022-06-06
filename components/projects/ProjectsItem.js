import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectsProjectsGirdSectionItem = styled.div`
  grid-column: span 1;
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s linear;

  &:hover .some .some2 {
    cursor: pointer;
    filter: brightness(0.7);
  }
  &:hover .some .hover-edit-pic {
    cursor: pointer;
    filter: brightness(1);
  }
  p {
    margin-top: 20px;
    font-size: 24px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-align: center;
    cursor: pointer;
  }
`;

function ProjectsItem({ projectImage, projectTitle }) {
  return (
    <>
      <ProjectsProjectsGirdSectionItem className="edit">
        <Link href="#">
          <a>
            <div style={{ position: "relative" }} className="some">
              <Image
                src={projectImage}
                width={256}
                height={256}
                style={{
                  boxShadow: "8px 0px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                }}
                className="some2"
              />
              <div className="hover-edit-pic">
                <Image src="/editedit_project.svg" width={93} height={93} />
              </div>
            </div>
          </a>
        </Link>

        <p>{projectTitle}</p>
      </ProjectsProjectsGirdSectionItem>
    </>
  );
}

export default ProjectsItem;
