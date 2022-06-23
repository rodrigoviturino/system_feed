import React from 'react';
import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Rodrigo Viturino"
            content="lorem ipsum dolor sit amet, consectetur adip"
          />
          <Post
            author="Maikera"
            content="Lorem ipsum dolor sit amet"
          />

        </main>
      </div>
      
    </div>
  )
}