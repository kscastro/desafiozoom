import Header from "../../components/Header";
import { Container, Logo, Main, Footer, Title, Wrapper } from "./styles";
import {
  InstantSearch,
  MenuSelect,
  Pagination,
  ScrollTo,
} from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";
import { CustomHits } from "../../components/Card";

const searchClient = algoliasearch(
  "testing84XGRQ4I0V",
  "62787d4c518c998497a73013fb8a4180"
);

const ArticlesPage = () => {
  return (
    <>
      <InstantSearch
        indexName="challenge_article_v2_items"
        searchClient={searchClient}
      >
        <Header />
        <Container>
          <Logo />
        </Container>
        <Main>
          <ScrollTo>
            <CustomHits />
          </ScrollTo>
        </Main>
        <Pagination
          translations={{
            previous: "‹",
            next: "›",
            first: "«",
            last: "»",
            page(currentRefinement) {
              return currentRefinement;
            },
            ariaPrevious: "Previous page",
            ariaNext: "Next page",
            ariaFirst: "First page",
            ariaLast: "Last page",
            ariaPage(currentRefinement) {
              return `Page ${currentRefinement}`;
            },
          }}
        />
        <Footer>
          <Wrapper>
            <Title>Filtrar por Autor</Title>
            <MenuSelect attribute="author.name" />
          </Wrapper>
          <Wrapper>
            <Title>Filtrar por Categoria</Title>
            <MenuSelect attribute="tags" />
          </Wrapper>
        </Footer>
      </InstantSearch>
    </>
  );
};

export default ArticlesPage;
