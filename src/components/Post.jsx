import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

// author: { avatar: url, name: 'string', rule: 'string' }
  // publishedAt: Date
  // content: [ {id: 1, paragraph: 'string', type: 'string' } ]

export function Post(props){
  const publishedDateFormatted = format(props.publishedAt, "d 'de' MMMM 'às' HH:mm'h", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


  const [ comments, setComments ] = React.useState([ 1,2 ]);

  function handleComments(event){
    event.preventDefault();
    
    setComments([...comments, comments.length + 1]);
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        { props.content.map((item) => {
          if(item.type === 'paragraph') {
            return <p>{item.content}</p>
          } else if(item.type === 'link'){
            return <p><a href="#">{item.content}</a></p>
          }
        })}
        <p>
          <a href="#">#voltaCuca</a>{' '}
          <a href="#">#foraRogerio</a>
        </p>
      </div>

      <form onSubmit={handleComments} className={styles.commentForm}>
        <textarea
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Adicionar Comentário</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((item) => {
          return <Comment />
        })}
      </div>

    </article>
  );
}