import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import ProjectsItem from "./ProjectsItem";

const ProjectsMain = styled.main`
  background-color: #f0f1f3;
  width: 100%;
  min-height: 1100px;
`;
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;
const ProjectsProjectsSection = styled.section`
  padding-top: 170px;
  display: block;
`;
const ProjectsProjectsSectionTitle = styled.h2`
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  color: #292d34;
  text-align: center;
  margin-bottom: 80px;
`;
const ProjectsProjectsGridSection = styled.div`
  display: grid;
  width: 950px;
  grid-template-columns: repeat(3, 1fr);
  gap: 86px;
  margin: 0 auto;
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
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-align: center;
  }
`;

function MyProjectsMain() {
  return (
      <ProjectsMain>
        <Wrapper>
          <ProjectsProjectsSection>
            <ProjectsProjectsSectionTitle>
              Мои проекты
            </ProjectsProjectsSectionTitle>
            <ProjectsProjectsGridSection>
              <ProjectsProjectsGirdSectionItem>
                <Link href="/start">
                  <a>
                    <Image
                      src="/projects-create-new.svg"
                      width={256}
                      height={256}
                      style={{ boxShadow: "8px 0px 20px rgba(0, 0, 0, 0.1)" }}
                    />
                  </a>
                </Link>

                <p>Создать проект</p>
              </ProjectsProjectsGirdSectionItem>

              <ProjectsItem
                projectImage={"/projectItemPhoto1.png"}
                projectTitle={"Поздравление для Ани и Яны"}
              />
              <ProjectsItem
                projectImage={"/projectItemPhoto1.png"}
                projectTitle={"Поздравление для Ани и Яны"}
              />
              <ProjectsItem
                projectImage={"/projectItemPhoto1.png"}
                projectTitle={"Поздравление для Ани и Яны"}
              />
              <ProjectsItem
                projectImage={"/projectItemPhoto1.png"}
                projectTitle={"Поздравление для Ани и Яны"}
              />
            </ProjectsProjectsGridSection>
          </ProjectsProjectsSection>
        </Wrapper>
      </ProjectsMain>
  );
}

export default MyProjectsMain;
