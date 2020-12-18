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
import { connectHits } from "react-instantsearch-dom";

const Card = ({ hits }) => {
  return (
    <>
     {hits.map(hit => (
       <Container key={hit.id}>
       <Link>
         <ImageCard src={hit.imageUrl} loading="lazy" />
       </Link>
       <Description>
         <Tag>{hit.tag}</Tag>
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
