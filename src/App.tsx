import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

// author: {avatar_url: "", name: "", role: ""}
// publisheAt: Data
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/myllakassia.png",
      name: "Mylena Araújo",
      role: "Web Developer ",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋🏾" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat",
      },
      {
        type: "link",
        content: "👉🏾 https://myllakassia.github.io/",
      },
    ],
    publishedAt: new Date("2022-11-09 16:30:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator Rocketseat ",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋🏾" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat",
      },
      {
        type: "link",
        content: " 👉🏾 https://myllakassia.github.io/ >",
      },
    ],
    publishedAt: new Date("2022-05-10 16:30:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={[]}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
