import React from "react";
import InputSearch from "../Input";
import { Container, HeaderImg, Wrapper } from "./styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderImg alt='logo' />
        <InputSearch />
      </Wrapper>
    </Container>
  );
};

export default Header;
