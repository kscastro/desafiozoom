import styled from "styled-components";
import logo from "../../assets/logo.svg";

export const Container = styled.header`
  display: flex;
  min-height: 60px;
  background: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  padding: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
`;

export const HeaderImg = styled.img.attrs({
  src: `${logo}`,
})`
  height: 33px;
  margin-right:20px;
`;
