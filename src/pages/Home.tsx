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
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: auto;
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
  position: relative;
`;

const Content = styled(motion.div)`
  max-width: 800px;
  background: rgba(10, 10, 12, 0.85);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.9);
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

const Sections = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Home = () => {
  return (
    <>
      <Background />
      <Container>
        <Hero>
          <Content
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title>Marcus Hedlund</Title>
            <Description>
              Dual-degree student at the University of Pennsylvania pursuing a Bachelor's in Artificial Intelligence 
              and Master's in Computer and Information Science with a 4.0 GPA. Passionate about developing 
              innovative solutions at the intersection of AI, systems, and web development.
            </Description>
            <Description>
              Technical expertise in Java, Python, C/C++, and web technologies. Currently focused on cloud computing,
              distributed systems, and interactive graphics development.
            </Description>
            <ResumeButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </ResumeButton>
          </Content>
        </Hero>
        <Sections>
          <Education />
          <Contact />
        </Sections>
      </Container>
    </>
  );
};

export default Home; 