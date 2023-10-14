import styles from './ModalsBackground.module.scss';
import React, {ReactNode} from 'react';
import {useModals} from "~/context/ModalProvider";

const ModalsBackground = ({ children }: {
    children: React.ReactNode;
}) => {
    const { type, closeModal } = useModals();

    return (
        <div className={styles.modal_wrapper} data-visible={type != null}>
            <div className={styles.background} onClick={closeModal} />
            {children}
        </div>
    );
};

export default ModalsBackground;
