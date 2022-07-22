import { ThumbsUp, Trash } from 'phosphor-react';
import React from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }){

  const [likeCount, setLikeCount] = React.useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeCount(){
    setLikeCount(likeCount + 1);
  }
  

  return(
    <section className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rodrigoviturino.png" alt=""/>

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rodrigo Viturino</strong>
              <time title="22 de Junho de 2022" dateTime="2022-06-22 00:01">Cerva de 2h atrás</time>
            </div>

            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={styles.commentLike}>
          <button onClick={handleLikeCount}>
            <ThumbsUp/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </section>
  )
}