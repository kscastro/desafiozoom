import styled from "styled-components";
import background from "../../assets/background.png";
import logopage from "../../assets/deumzoom_logo.svg";

export const Container = styled.div`
  background: #612a92;
  background-image: url(${background});
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10vw 0;
  min-height: 200px;
  max-height: 450px;
  text-align: left;
`;
export const Logo = styled.img.attrs({
  src: `${logopage}`,
})``;

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
