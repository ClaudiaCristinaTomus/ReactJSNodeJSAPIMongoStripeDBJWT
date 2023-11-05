import React from "react";
import styled from "styled-components";
import {Search} from '@material-ui/icons';

const Container = styled.div`
  height: 60px;
`;
const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
`;


const MenuItem = styled.div`
  font-size:14px;
  cursor:pointer;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display:flex;
  align-items: center;
  margin-left: 25px;
  padding:5px;
`

const Input = styled.input`
  border:none;
`

const Wraper = styled.div`
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>C | T</Logo>
        </Center>
        <Right>right</Right>
      </Wraper>
    </Container>
  );
};

export default Navbar;
