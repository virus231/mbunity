import styles from './BurgerMenu.module.scss';

import React from 'react';
import {useModals} from "~/context/ModalProvider";
import SVG_CROSS from "~/svg/cross.svg"
import {Logo} from "~/components/Logo/Logo";
import {HEADER_LINKS} from "~/config/header";
import Link from "next/link";
import SVG_PROFILE from "~/svg/profile-menu.svg";
import SVG_CART from "~/svg/cart-menu.svg";

type TProps = {
    isVisible: boolean;
};

const BurgerMenu = ({ isVisible }: TProps) => {
    const {closeModal } = useModals();

    return (
        <div className={styles.burger_menu__root} data-visible={isVisible}>
            <div className={styles.mobileBurger}>
                <div className={styles.burger_menu__top}>
                    <Logo color="white"/>
                    <div className={styles.mobileBurger__close} onClick={closeModal}>
                        <SVG_CROSS />
                    </div>
                </div>

                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul>
                            {HEADER_LINKS.map(item => {
                                return (
                                    <li key={item.id}>
                                        <Link
                                            href={item.path}
                                            // className={pathname === item.link ? styles.active : ''}
                                        >
                                            {item.name}
                                            {/*{item.subMenu && getIcon(EnumIcons.arrow)}*/}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div className={styles.services}>
                        <Link href="/">
                            <SVG_PROFILE />
                        </Link>
                        <Link href="/">
                            <SVG_CART />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BurgerMenu;
