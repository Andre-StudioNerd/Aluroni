import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

export function Menu() {
  const rotas = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
           <Link to={rota.to} className={styles.menu__link}>
           {rota.label}
           
           </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
