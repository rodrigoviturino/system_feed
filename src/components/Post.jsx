import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/rodrigoviturino.png" />
          <div className={styles.authorInfo}>
            <strong>Rodrigo Viturino</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="22 de Junho de 2022" dateTime="2022-06-22 00:01">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fale Pessoal!</p>
        <p>lorem ipsum dolor sit amet</p>{' '}
        <p>lorem ips</p>{' '}
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