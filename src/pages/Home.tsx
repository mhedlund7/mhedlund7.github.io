import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Background from '../components/Background';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  color: white;
  z-index: 1;
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const LeftSidebar = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    width: 400px;
    height: calc(100vh - 4rem);
    position: fixed;
    overflow-y: auto;
    padding: 1rem 2rem;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }

    /* Scale content based on viewport height */
    --scale-factor: min(1, calc((100vh - 4rem) / 700px));
    transform: scale(var(--scale-factor));
    transform-origin: top center;
  }
`;

const RightContent = styled.div`
  flex: 1;
  padding: 1rem;
  min-height: calc(100vh - 4rem);
  overflow-y: auto;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    margin-left: 400px;
    padding: 2rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 15px;
  margin-bottom: 1rem;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Name = styled.h2`
  font-size: 2rem;
  margin: 0;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: white;
`;

const Content = styled(motion.div)`
  background: rgba(18, 18, 18, 0.7);
  padding: 1rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.9);

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ResumeButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #0052a3;
  }
`;

const ProjectsSection = styled.div`
  margin-bottom: 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(18, 18, 18, 0.7);
  border-radius: 15px;
  padding: 1rem;
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  width: 100%;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  font-size: 0.9rem;
  color: #b794f4;
  margin-bottom: 0.5rem;
`;

const ProjectPeriod = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const ContactWrapper = styled.div`
  width: 100%;
  max-width: 300px;
`;

const Home = () => {
  const projects = [
    {
      title: "Cloud-based Search Engine",
      description: "Developed a distributed search engine processing 150,000+ web pages using Java. Implemented sophisticated database architecture with reverse indexing, PageRank calculation, and word frequency tracking using AWS DynamoDB and S3. Features include Porter stemming, domain deduplication, and intelligent caching strategies.",
      technologies: "Java, AWS (DynamoDB, S3), Distributed Systems",
      period: "Fall 2024"
    },
    {
      title: "Mini Minecraft",
      description: "Built a 3D voxel game engine with procedural terrain generation, efficient chunk-based rendering, and physics. Implemented multithreaded terrain loading, texture animation, and post-processing effects. Added features like water waves, height map generation, and obj file voxelization. Created multiple biomes with unique features and procedurally placed assets.",
      technologies: "C++, OpenGL, Qt, GLSL, Multithreading",
      period: "Spring 2025"
    },
    {
      title: "PennOS - Operating System Implementation",
      description: "Developed a UNIX-like operating system with a priority scheduler, FAT file system, and shell interface. Implemented process management with PCBs, signal handling, file I/O, and multithreading. Created comprehensive logging system for scheduler and kernel events. Built shell with job control, I/O redirection, and built-in commands.",
      technologies: "C, POSIX Threads, File Systems, Operating Systems",
      period: "Spring 2025"
    },
    {
      title: "Music Exploration Web Application",
      description: "Built a full-stack music analytics platform integrating Spotify, Billboard, and Kaggle datasets. Optimized complex database queries reducing runtime from minutes to sub-second. Created advanced analytics visualizations for audio feature evolution and artist similarity recommendations.",
      technologies: "React, Node.js, PostgreSQL, JavaScript",
      period: "Fall 2024"
    }
  ];

  return (
    <>
      <Background />
      <Container>
        <LeftSidebar>
          <ProfileContainer>
            <ProfileImage 
              src="/images/profile.JPG" 
              alt="Marcus Hedlund"
            />
            <Name>Marcus Hedlund</Name>
          </ProfileContainer>
          <ContactWrapper>
            <Contact />
          </ContactWrapper>
        </LeftSidebar>
        <RightContent>
          <Content
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Description>
              Hello! I'm Marcus.
            </Description>
            <Description>
            I'm a dual-degree student at the University of Pennsylvania, pursuing a Bachelor's in Artificial Intelligence and a Master's in Computer and Information Science.
            </Description>
            <Description>
            Currently, I'm working as a research assistant with Professor Chris Callison-Burch at the University of 
            Pennsylvania.
            </Description>
            <Description>
            Through my diverse portfolio of projects spanning operating systems, graphics, and distributed systems, I've developed a strong foundation in both theoretical computer science and practical software engineering.
              I aim to continue pushing the boundaries of what's possible in AI and systems development, while maintaining 
              a focus on creating robust, scalable solutions.
            </Description>
          </Content>
          <Education />
          <ProjectsSection>
            <SectionTitle>Projects</SectionTitle>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>Technologies: {project.technologies}</ProjectTech>
                  <ProjectPeriod>{project.period}</ProjectPeriod>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsSection>
        </RightContent>
      </Container>
    </>
  );
};

export default Home; 