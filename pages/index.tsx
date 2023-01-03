import {server} from '../config'
// import Head from 'next/head'
import ArticleList from '../components/ArticleList';
import {IArticle} from "../types/types"
import { GetStaticProps } from 'next'
type HomeProps = {
  articles: IArticle[];
};

export default function Home({articles}: HomeProps) {

  return (
    <div>
      {/* 
      Meta Component was created

      <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming"/>
      </Head> */}
      <ArticleList articles={articles}/>
    </div>
  )
}


// export const getStaticProps: GetStaticProps = async ()=>{
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

//   const articles = await resp.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async ()=>{
  const resp = await fetch(`${server}/api/articles`)

  const articles = await resp.json()

  return {
    props: {
      articles
    }
  }
}