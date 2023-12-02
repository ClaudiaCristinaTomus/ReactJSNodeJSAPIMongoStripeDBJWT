import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 40%;
  height: 50vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor:pointer;
`;

const FilterSize = styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width:50%;
display:flex;
align-items:center;
justify-content: space-between;
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 0px 5px;
`;
const Button = styled.button`
padding:15px;
border: 2px solid teal;
background-color:white;
cursor:pointer;
font-weight:500;
&:hover{
    background-color: #f8f4f4;
}
`;

const Product = () => {
  return (
    <Container>
      
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="data:image/jpeg;base64,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" />
        </ImgContainer>
        <InfoContainer>
          <Title>Dresses</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            aliquid veniam, architecto doloremque corrupti voluptate saepe fuga
            illum obcaecati, sapiente minus consequatur quis eligendi similique
            dolor at corporis dolorem dolores!
          </Desc>
          <Price>10 $</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
