'use client'
import styles from './Header.module.scss';
import {HEADER_LINKS, headerMenu} from '~/config/header';
import Link from 'next/link';
import SVG_PROFILE from '~/svg/profile.svg';
import SVG_CART from '~/svg/cart.svg';
import {ModalType, useModals} from '~/context/ModalProvider';
import {useMediaQuery} from "~/hooks/useMediaQuery";
import {WIDTH_WIDE_TABLET} from "~/constants/constants";
import BurgerButton from "~/components/Header/BurgerButton/BurgerButton";
import {Logo} from "~/components/Logo/Logo";


export const Header = () => {
    const { openBurgerMenu, type } = useModals();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo/>
        <div className={styles.menu}>
             <nav className={styles.nav}>
                    <ul className={styles.menu__list}>
                        {HEADER_LINKS.map(({ name, path, id }) => (
                            <li key={id} className={styles.menu__list_item}>
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

                <BurgerButton
                    opened={type == ModalType.burgerMenu}
                    toggle={openBurgerMenu}
                />
        </div>
      </div>
    </header>
  );
};
