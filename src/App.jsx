import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';


export function App() {

  // author: { avatar: url, name: 'string', rule: 'string' }
  // publishedAt: Date
  // content: [ {id: 1, paragraph: 'string', type: 'string' } ]

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/adelmodias.png',
        name: 'Adelmo Dias',
        role: 'Web Development'
      },
      content: [
        { type: 'paragraph', content: 'Fala Pessoal!'},
        { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur'},
        { type: 'link', content: 'Vamos Meu Tricolor Querido!'},
      ],
      publishedAt: new Date('2022-05-22 20:00:00'),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk brito',
        role: 'Educator Development'
      },
      content: [
        { type: 'paragraph', content: 'Fala Galera!'},
        { type: 'paragraph', content: 'Sit amet, consectetur'},
        { type: 'link', content: 'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2022-06-23 10:30:00'),
    }
  ]


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {/* <Post
            author="Rodrigo Viturino"
            content="lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Maikera"
            content="Lorem ipsum dolor sit amet"
          /> */}

          {
            posts.map((item) => {
              return (
                <Post
                  key={item.id}
                  author={item.author}
                  content={item.content}
                  publishedAt={item.publishedAt}
                />
              )
            })
          }

        </main>
      </div>
      
    </div>
  )
}