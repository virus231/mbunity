import {FC} from 'react'
import styles from "./Header.module.scss"

export type HeaderProps = {}

export const Header: FC<HeaderProps> = ({}) => {
    return <header className={styles.header}>
        <div>
            123
        </div>
    </header>
}