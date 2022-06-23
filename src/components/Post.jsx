import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props){
  console.log(props)
  // author: { avatar: url, name: 'string', rule: 'string' }
  // publishedAt: Date
  // content: [ {id: 1, paragraph: 'string', type: 'string' } ]

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/rodrigoviturino.png" />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title="22 de Junho de 2022" dateTime="2022-06-22 00:01">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        {props.content.map((item) => {
          if(item === 'paragraph') {
            return item.content.content
          }
        })}
        <p>
          <a href="#">#voltaCuca</a>{' '}
          <a href="#">#foraRogerio</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <textarea
          placeholder="Deixe seu comentário"
        />

        <footer>
          <button type="submit">Adicionar Comentário</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}