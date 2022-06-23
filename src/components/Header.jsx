import styles from './Header.module.css';

import igniteLogo from '../assets/Ignite-logo.svg';

console.log(igniteLogo);

export function Header(){
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      <h1>Ignite Header</h1>
    </header>
  )
}
