import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  font-weight: 300;
  font-size: 16px;
  background-color:${({ theme }) => theme.colors.white};;
  border: none;
  border-radius: 24px;
  color:${({ theme }) => theme.colors.black};
  height: 48px;
  box-shadow: 0 2px 4px 0 ${({ theme }) => theme.colors.shadow};;
  box-sizing: border-box;
  padding-left: 30px;
  outline:none;
`;

