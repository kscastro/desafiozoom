import React from "react";
import { Container, Input } from "./styles";
import { connectSearchBox } from "react-instantsearch-dom";

const InputSearch = ({ currentRefinement, refine }) => {
  return (
    <Container>
      <Input
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        type="text"
        placeholder="Digite sua busca..."
      />
    </Container>
  );
};

export const CustomSearchBox = connectSearchBox(InputSearch);
