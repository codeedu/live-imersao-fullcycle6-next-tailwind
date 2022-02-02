import axios from "axios";
import { GetStaticProps, NextPage } from "next";

type Post = {
  title: string;
  body: string;
};

type PostsPageProps = {
  posts: Post[];
  time: number
};

const PostsPage: NextPage<PostsPageProps> = (props) => {
  const { posts, time } = props;

  return (
    <div>
      <h1>Listagem de posts</h1>
      <p>{time}</p>
      <ul>
        {posts.map((p, key) => (
          <li key={key}>
            {p.title} | {p.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("executou do lado servidor");
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  //acessar de banco de dados
  //consumir uma API externa
  return {
    props: {
      posts,
      time: new Date().getTime()
    },
    revalidate: 10,
  };
};



//gerou a página de posts

//acessos

//10 -

//continue retornando o HTML antigo

//retornar a nova versão


//GetServerSideProps - runtime
//GetStaticProps - paginas staticas | getStaticPaths - quais SLUG que permite gerar paginas static
//Incremental Static Regeneration - ISR