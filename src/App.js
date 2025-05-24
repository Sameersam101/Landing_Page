import LogoImage from "./assets/icon.png";
import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;

  &:hover {
    color: #3a86ff;
  }
`;

const Hero = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #666;
  max-width: 700px;
  margin: 0 auto 40px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: #3a86ff;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  margin: 0 10px;

  &:hover {
    background: #2667cc;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(58, 134, 255, 0.2);
  }
`;

const Features = styled.section`
  padding: 80px 0;
  background: #f9fafc;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #333;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: #3a86ff;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Footer = styled.footer`
  padding: 40px 0;
  text-align: center;
  background: #333;
  color: white;
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
`;

// Main App Component
function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <Logo src={LogoImage} alt="Arthik Sathi Logo" />
          <Nav>
            <NavLink href="#features">Features</NavLink>
          </Nav>
        </Header>

        <Hero>
          <HeroTitle>
            Simplify Your Business Finances with Arthik Sathi
          </HeroTitle>
          <HeroSubtitle>
            A Flutter-based mobile app designed for small and medium-sized
            enterprises in Nepal to manage sales, expenses, inventory, and
            analytics effortlessly, powered by AI and cloud technology.
          </HeroSubtitle>
          <div>
            <Button
              href="https://drive.google.com/file/d/10EGVosS3A1SPesSP44Gm0cJXOqey66Qy/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get App
            </Button>
          </div>
        </Hero>
      </Container>

      <Features id="features">
        <Container>
          <SectionTitle>Powerful Features for SMEs</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>📸</FeatureIcon>
              <FeatureTitle>AI-Powered Bill Scanning</FeatureTitle>
              <FeatureText>
                Scan bills using Google Gemini API to automatically extract
                products, quantities, and totals, saving time and reducing
                errors.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>📦</FeatureIcon>
              <FeatureTitle>Inventory Management</FeatureTitle>
              <FeatureText>
                Add or remove products manually or via barcode scanning with
                Barcode Monster and Open Food Facts APIs, with real-time low
                stock alerts.
              </FeatureText>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureTitle>Real-Time Analytics</FeatureTitle>
              <FeatureText>
                Track income, expenses, and net profit with interactive
                dashboards and bar charts, highlighting top-performing products.
              </FeatureText>
            </FeatureCard>
          </FeaturesGrid>
        </Container>
      </Features>

      <Footer>
        <Container>
          <FooterText>
            © {new Date().getFullYear()} Arthik Sathi. All rights reserved.
          </FooterText>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
