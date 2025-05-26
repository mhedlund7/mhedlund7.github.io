import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 2rem auto;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 10px;
`;

const CategoryTitle = styled.h3`
  color: #0066cc;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "C", "C++", "C#", "OCaml", "SQL (PostgreSQL)", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Node.js", "PyTorch", "Unity"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "AWS", "LaTeX"]
    },
    {
      title: "Libraries",
      skills: ["NumPy", "pandas", "Matplotlib"]
    }
  ];

  return (
    <Section>
      <Title>Technical Skills</Title>
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillsList>
              {category.skills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Section>
  );
};

export default Skills; 