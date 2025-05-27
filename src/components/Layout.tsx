import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const NavBar = styled.nav`
  padding: 1rem;
  background-color: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: flex-start;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0066cc;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #0066cc;
  }
`;

const MainContent = styled.main`
  padding-top: 4rem;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Layout = () => {
  return (
    <>
      <NavBar>
        <NavList>
          <li><NavItem to="/">Home</NavItem></li>
          <li>
            <ExternalLink 
              href="https://linkedin.com/in/marcushedlund" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            <ExternalLink 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Resume
            </ExternalLink>
          </li>
        </NavList>
      </NavBar>
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default Layout; 