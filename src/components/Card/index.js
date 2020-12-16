import {
  Container,
  ImageCard,
  Description,
  Tag,
  Title,
  Subtitle,
  Author,
} from "./styles";

const Card = ({ src, tag, title, subtitle, author }) => {
  return (
    <Container>
      <ImageCard src={src} />
      <Description>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Author>{author}</Author>
      </Description>
    </Container>
  );
};

export default Card;
