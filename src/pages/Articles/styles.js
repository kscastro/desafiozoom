import styled from "styled-components";
import background from "../../assets/background.png";
import logopage from "../../assets/deumzoom_logo.svg";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  background-image: url(${background});
  background-size: cover;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  max-height: 450px;
  text-align: left;
`;
export const Logo = styled.img.attrs({
  src: `${logopage}`,
})`
  width: 240px;
`;

export const Main = styled.main`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  max-width: 1140px;
  width: 95%;
  top: -70px;
  position: relative;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  background-image: url(${background});
  background-size: cover;
  color: #fff;
  display: flex;
  min-height: 200px;
  max-height: 450px;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  flex-wrap:wrap;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 20px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  font-family: "Roboto", sans-serif;
`;

export const Wrapper = styled.div`
  margin-left: 10px;
`;
