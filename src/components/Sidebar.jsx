import {PencilSimpleLine} from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/rodrigoviturino.png" />

        <strong>Rodrigo Viturino</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}