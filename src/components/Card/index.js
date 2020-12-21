import {
  Container,
  Description,
  Tag,
  Title,
  Subtitle,
  Author,
  Link,
} from "./styles";
import { connectHits } from "react-instantsearch-dom";
import LazyImage from "../Lazy";

const Card = ({ hits }) => {
  return (
    <>
      {hits.map((hit) => (
        <Container key={hit.id}>
          <Link>
            <LazyImage src={hit.imageUrl} alt={hit.tags[0]} />
          </Link>
          <Description>
            <Tag>{hit.tags[0]}</Tag>
            <Link>
              <Title>{hit.title}</Title>
              <Subtitle>{hit.subtitle}</Subtitle>
              <Author>{hit.author.name}</Author>
            </Link>
          </Description>
        </Container>
      ))}
    </>
  );
};

export const CustomHits = connectHits(Card);
