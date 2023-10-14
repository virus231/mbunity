import { FC } from 'react';
import styles from './Header.module.scss';
import { headerMenu } from '~/config/header';
import Link from 'next/link';
import SVG_PROFILE from '~/svg/profile.svg';
import SVG_CART from '~/svg/cart.svg';

export type HeaderProps = {};

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h3>Logo Here</h3>
        </div>
        <div className={styles.menu}>
          <nav className={styles.nav}>
            <ul className={styles.menu__list}>
              {headerMenu.map(({ name, path }) => (
                <li key={name} className={styles.menu__list_item}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
              <li>
                <Link href="/">
                  <SVG_PROFILE />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <SVG_CART />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
