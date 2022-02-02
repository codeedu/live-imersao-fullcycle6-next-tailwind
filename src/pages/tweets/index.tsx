import axios from "axios";
import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";

type Tweet = {
  text: string;
};

type TweetsPageProps = {
  name: string;
  tweets: Tweet[];
};

const TweetsPage: NextPage<TweetsPageProps> = (props) => {
  const { tweets } = props;
  // const [tweets, setTweets] = useState<Tweet[]>([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/api/tweets").then((res) => {
  //     setTweets(res.data);
  //   });
  // }, []);

  return (
    <div>
      <h1>Listagem de tweets</h1>
      <p>{props.name}</p>
      <ul>
        {tweets.map((t, key) => (
          <li key={key}>{t.text}</li>
        ))}
      </ul>
      <button onClick={() => alert("oi!")}>Mostrar alerta</button>
    </div>
  );
};

export default TweetsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("executou do lado servidor");
  const { data: tweets } = await axios.get("http://localhost:3000/api/tweets");
  //acessar de banco de dados
  //consumir uma API externa
  return {
    props: {
      name: "Full Cycle",
      tweets,
    },
  };
};
