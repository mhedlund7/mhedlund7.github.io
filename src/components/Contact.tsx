import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 1.5rem;
  color: white;
  background: rgba(10, 10, 12, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  margin: 0 auto;
  max-width: 1200px;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

const ContactLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  font-weight: 400;
  letter-spacing: -0.01em;

  &:hover {
    color: #0052a3;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const InfoItem = styled.p`
  margin: 0.5rem 0;
`;

const Contact = () => {
  return (
    <Section>
      <Title>Contact Me</Title>
      <ContactContainer>
        <ContactLink href="mailto:mhedlund@seas.upenn.edu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          mhedlund@seas.upenn.edu
        </ContactLink>
        <ContactLink href="tel:+16126692313">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          (612) 669-2313
        </ContactLink>
        <ContactLink 
          href="https://linkedin.com/in/marcushedlund"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          LinkedIn
        </ContactLink>
      </ContactContainer>
    </Section>
  );
};

export default Contact; 