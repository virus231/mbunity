import React from 'react';
import styles from './BurgerButton.module.scss';
import SVG_BURGER from "~/svg/burger.svg"

type TProps = {
    opened: boolean;
    toggle: () => void;
};

const BurgerButton = ({ opened, toggle }: TProps) => {
    return (
        <div className={styles['burger']}>
            <figure
                onClick={toggle}
            >
                <SVG_BURGER/>
            </figure>
        </div>
    );
};

export default BurgerButton;
