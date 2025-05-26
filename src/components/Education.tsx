import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 2rem;
  color: white;
  background: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const EducationCard = styled(motion.div)`
  background: rgba(8, 8, 10, 0.7);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const School = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  color: #0066cc;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const Degree = styled.div`
  font-size: 1.15rem;
  margin-bottom: 0.3rem;
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const Details = styled.div`
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const Education = () => {
  return (
    <Section>
      <Title>Education</Title>
      <EducationCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <School>University of Pennsylvania</School>
        <Degree>Bachelor of Science in Engineering in Artificial Intelligence</Degree>
        <Degree>Master of Science in Engineering in Computer and Information Science</Degree>
        <Details>GPA: 4.00/4.00 • Expected May 2027</Details>
      </EducationCard>

      <EducationCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <School>The Blake School</School>
        <Details>High School Diploma • GPA: 3.98/4.00 • ACT: 36 • June 2023</Details>
      </EducationCard>
    </Section>
  );
};

export default Education; 