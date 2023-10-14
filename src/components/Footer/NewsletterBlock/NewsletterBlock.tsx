'use client'
import {ChangeEvent, FC, useState} from 'react';
import styles from './NewsletterBlock.module.scss';

export type NewsletterBlockProps = {};

export const NewsletterBlock: FC<NewsletterBlockProps> = ({}) => {
    const [email, setEmail] = useState('');

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    return (
    <div className={styles.newsletter}>
      <h6>Join Our Newsletter</h6>

      <div className={styles.fieldGroup}>
        <input
            type='email'
            value={email}
            onChange={handleChangeInput}
            className={styles.input}
            placeholder='Your email address'
        />
        <button type="submit" className={styles.btn}>
          Subscribe
        </button>
      </div>
        <p className={styles.description}>
            * Will send you weekly updates for your better tool management.
        </p>
    </div>
  );
};
