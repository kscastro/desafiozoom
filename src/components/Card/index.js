import {
  Container,
  ImageCard,
  Description,
  Tag,
  Title,
  Subtitle,
  Author,
  Link,
} from "./styles";

const Card = ({ href, src, tag, title, subtitle, author }) => {
  return (
    <Container>
      <Link href={href}>
        <ImageCard src={src} loading="lazy" />
      </Link>
      <Description>
        <Tag>{tag}</Tag>
        <Link href={href}>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Author>{author}</Author>
        </Link>
      </Description>
    </Container>
  );
};

export default Card;
