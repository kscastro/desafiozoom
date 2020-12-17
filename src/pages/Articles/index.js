import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, Logo, Main } from "./styles";
import axios from "axios";

const ArticlesPage = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    async function fecthData() {
      const body = JSON.stringify({
        requests: [
          {
            indexName: "challenge_article_v2_items",
            params: "query=geladeira",
          },
        ],
      });

      const headers = {
        "x-algolia-api-key": "6097db7ff0b7b706bec46bd54fb36556",
        "x-algolia-application-id": "testing84XGRQ4I0V",
      };

      const response = await axios.post(
        "https://b1-fr-3.algolianet.com/1/indexes/*/queries",
        body,
        {
          headers,
        }
      );
      setArticles(response.data);
    }
    fecthData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Logo />
      </Container>
      <Main>
        {articles
          ? articles.results[0].hits.map((article) => (
              <Card
                key={article.id}
                src={article.imageUrl}
                tag={article.tags[0]}
                title={article.title}
                subtitle={article.subtitle}
                author={article.author.name}
                href={article.url}
              />
            ))
          : "erro"}
      </Main>
    </>
  );
};

export default ArticlesPage;
