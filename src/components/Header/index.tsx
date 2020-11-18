import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import TypeScriptLogo from 'assets/react.svg';

function Header() {
  return (
    <header className={styles.nav}>
      <div className={styles.nav__home}>
        <Link to="/" className={styles.nav__link}>
          <img
            className={styles.nav__logo}
            src={TypeScriptLogo}
            alt="ts-logo"
          />
        </Link>
      </div>
      <ul className={styles.nav__menu}>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/users">
            Users
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/posts">
            Posts
          </Link>
        </li>
      </ul>
    </header>
  );
}

export { Header };
