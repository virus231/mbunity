import styles from "./Logo.module.scss"


type Props = {
    color?: string;
    fontSize?: string
}

export const Logo = ({color, fontSize}: Props) => {
    return <div className={styles.logo}>
        <h3 style={{
            color,
            fontSize
        }}>Logo Here</h3>
    </div>
}