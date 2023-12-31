import React from "react";
import styled from "styled-components";

const Container = styled.div`
width:100vw;
height:100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
),
url("https://img.freepik.com/free-photo/paper-texture-colorful-abstract-background_53876-98401.jpg?w=1060&t=st=1701352217~exp=1701352817~hmac=6789dd6c175eeab5624525001b46bb766b5d226d5eb78ffb2d060dd2457b13fc")
center;
display:flex;
align-items: center;
background-size: cover;
justify-content: center;
`;
const Wrapper = styled.div`
width:40%;
padding:20px;
background-color: white;
`;
const Title = styled.h1`
font-size:24px;
font-weight:300;
`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin:20px 0px;
`;
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
