import { FC } from 'react';
import styles from './GroupTitles.module.scss';

export type GroupTitlesProps = {
  title: string;
  subtitle: string;
};

export const GroupTitles: FC<GroupTitlesProps> = ({ title, subtitle }) => {
  return (
    <section>
      <div className={styles.container}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
};
