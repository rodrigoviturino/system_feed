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
  });

  // Lista de Comentários
  const [ comments, setComments ] = React.useState([
    'Post Fera hem?!'
  ]);

  // Valor Textarea
  const [newCommentText, setNewCommentText] = React.useState('');

  // Formulario
  function handleCreateNewComment(event){
    event.preventDefault();
      // Lista de Comentários
    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  // Textarea
  function handleNewCommentChange(event){
    // Valor do Campo
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  // Método para deletar comentário
  function deleteComment(commentToDelete){

    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    });

    setComments(commentsWithoutDeleteOne);
  }

  // Validação INPUT
  function handleNewCommentInvalid(event){
    event.target.setCustomValidity('Olhe o campo');
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
            return <p key={item.content}>{item.content}</p>
          } else if(item.type === 'link'){
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
        <p>
          <a href="#">#voltaCuca</a>{' '}
          <a href="#">#foraRogerio</a>
        </p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        
        <textarea
          name="comment"
          placeholder="Deixe seu comentário"
          value = {newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Adicionar Comentário</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>

    </article>
  );
}