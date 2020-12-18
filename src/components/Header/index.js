import React from "react";
import { CustomSearchBox } from "../Input";
import { Container, HeaderImg, Wrapper } from "./styles";



const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderImg alt="logo" />
        <CustomSearchBox />
      </Wrapper>
    </Container>
  );
};

export default Header;
