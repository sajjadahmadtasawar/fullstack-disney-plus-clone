import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="../images/cta-logo-one.svg" alt="top_logo" />
          <SignUp>
            <Link to="/home">GET ALL THERE</Link>
          </SignUp>
          <Description>
            Star on Disney+ brings you more. Hundreds more TV series & movies,
            plus thousands of hours of drama, suspense, humour and thrills.
            Enjoy Star as part of your Disney+ subscription.
          </Description>
          <CTALogoTwo src="../images/cta-logo-two.png" alt="bottom_logo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`;

const BgImage = styled.div`
  background-image: url('/images/login-background.jpg');
  height: 100%;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;

  padding-right: 43px;
  text-align: center;
  margin-bottom: 2vh;
  margin-top: 0;
  max-width: 650px;
  flex-wrap: wrap;
`;

const CTALogoOne = styled.img`
  margin-bottom: 25px;
  max-width: 600px;
  min-width: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled.a`
  border: 1px solid transparent;
  background-color: #0063e5;
  padding: 20px;
  letter-spacing: 1.5px;
  border-radius: 4px;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  color: #f9f9f9;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 2.5px;
  margin: 20px 0;
`;

const CTALogoTwo = styled.img`
  width: 100%;
  display: inline-block;
  vertical-align: bottom;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export default Login;
