import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";
import { IArticle } from "../types/types";

type ArticleListProps = {
  articles: IArticle[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
