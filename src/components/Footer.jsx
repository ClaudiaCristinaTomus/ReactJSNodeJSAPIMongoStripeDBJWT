import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Room,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin:0px 30px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 10px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items: center;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>C | T</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          tempore ratione reprehenderit vel omnis ullam, nisi odio dicta eum
          autem alias iste molestias blanditiis est ipsum. Ea est sapiente
          minus!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5991">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          123 546 789 Romania
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}}/>
          contact@contact.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
