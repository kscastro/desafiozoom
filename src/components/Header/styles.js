import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
`;
