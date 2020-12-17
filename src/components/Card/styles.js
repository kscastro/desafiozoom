import styled from "styled-components";

export const Container = styled.div`
  flex-flow: column nowrap;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ecf0f1;
  background-color: #fff;
  margin: 0 20px 40px;
  
`;

export const ImageCard = styled.img.attrs((props) => ({ src: props.src }))`
  width: 100%;
  height: 182.4px;
  border-radius: 8px 8px 0px 0px;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-start;
  justify-content: center;
  margin: 0;
  padding: 30px;
  font-size: 14px;
  overflow: hidden;
`;

export const Tag = styled.a`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  color: #3790f8;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  color: #333;
  text-transform: none;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
`;

export const Subtitle = styled.p`
  margin: 8px 0 0;
  padding: 0;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: #666;
  max-height: 65px;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
`;

export const Author = styled.p`
  display: block;
  margin: 18px 0 0;
  padding: 0;
  font-family: Roboto;
  font-size: 16px;
  color: #777;
  font-family: 'Roboto', sans-serif;
`;

export const Link = styled.a`
  margin: 0;
  padding: 0;
  text-decoration:none;
`;
