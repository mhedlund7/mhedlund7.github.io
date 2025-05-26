import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Background from '../components/Background';

const Container = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  color: white;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
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

const ProjectLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectTech = styled.div`
  font-size: 0.9rem;
  color: #0066cc;
  margin-bottom: 0.5rem;
`;

const ProjectPeriod = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const Projects = () => {
  const projects = [
    {
      title: "Cloud-based Search Engine",
      description: "Developed a distributed search engine processing 150,000+ web pages using Java. Implemented sophisticated database architecture with reverse indexing, PageRank calculation, and word frequency tracking using AWS DynamoDB and S3. Features include Porter stemming, domain deduplication, and intelligent caching strategies.",
      technologies: "Java, AWS (DynamoDB, S3), Distributed Systems",
      period: "Nov. 2024 - Dec. 2024"
    },
    {
      title: "Music Exploration Web Application",
      description: "Built a full-stack music analytics platform integrating Spotify, Billboard, and Kaggle datasets. Optimized complex database queries reducing runtime from minutes to sub-second. Created advanced analytics visualizations for audio feature evolution and artist similarity recommendations.",
      technologies: "React, Node.js, PostgreSQL, JavaScript",
      period: "Sept. 2024 - Dec. 2024"
    }
  ];

  return (
    <>
      <Background />
      <Container>
        <Grid>
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
        </Grid>
      </Container>
    </>
  );
};

export default Projects; 