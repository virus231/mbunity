'use client'
import styles from './Header.module.scss';
import {HEADER_LINKS} from '~/config/header';
import Link from 'next/link';
import SVG_PROFILE from '~/svg/profile.svg';
import SVG_CART from '~/svg/cart.svg';
import SVG_ARROW_DOWN from '~/svg/arrow-down.svg';
import {ModalType, useModals} from '~/context/ModalProvider';
import BurgerButton from "~/components/Header/BurgerButton/BurgerButton";
import {Logo} from "~/components/Logo/Logo";
import {usePathname} from "next/navigation";


export const Header = () => {
    const pathname = usePathname();

    const { openBurgerMenu, type } = useModals();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo/>
        <div className={styles.menu}>
             <nav className={styles.nav}>
                    <ul className={styles.menu__list}>
                        {HEADER_LINKS.map(({ name, path, id, subMenu }) => (
                            <li key={id} className={styles.menu__list_item}>
                                <Link                   className={pathname === path ? styles.active : ''}
                                                        href={path}>{name}</Link>
                                {subMenu && <SVG_ARROW_DOWN/>}
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
