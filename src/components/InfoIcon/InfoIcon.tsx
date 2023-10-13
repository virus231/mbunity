import {FC} from 'react'
import styles from "./InfoIcon.module.scss"

export type InfoIconProps = {
    icon: React.ReactElement
    info: React.ReactElement
}

export const InfoIcon: FC<InfoIconProps> = ({icon,
                                                info}) => {
    return <div className={styles.info__icon_block}>
        <p>{icon}</p>
        {info}
    </div>
}