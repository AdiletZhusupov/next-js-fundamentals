import {server} from "../../../config"
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { IArticle, IDataArticle } from "../../../types/types";
import Meta from "../../../components/Meta"

type ArticlePageProps = {
  // external API
  // article: IArticle;

  // internal API
  article: IDataArticle;
};

const article = ({ article }: ArticlePageProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // const router = useRouter()
  // const {id} = router.query

  return (
    <>
      <Meta title={article.title} description={article.excerpt}/>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const resp = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
//   );
//   const article = await resp.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticProps: GetStaticProps = async (context) => {
//   const resp = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
//   );
//   const article = await resp.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const articles = await resp.json();

//   const ids = articles.map((article: IArticle) => article.id);
//   const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };


export const getStaticProps: GetStaticProps = async (context) => {
  const resp = await fetch(
    `${server}/api/articles/${context.params?.id}`
  );
  const article = await resp.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await fetch(`${server}/api/articles`);
  const articles = await resp.json();

  const ids = articles.map((article: IArticle) => article.id);
  const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
export default article;
