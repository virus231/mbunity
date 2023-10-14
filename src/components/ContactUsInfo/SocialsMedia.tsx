import styles from './ContactInfo.module.scss';
import Link from 'next/link';
import SVG_TWITTER from '~/svg/twitter.svg';
import SVG_INSTAGRAM from '~/svg/instagram.svg';
import SVG_DISCORD from '~/svg/discord.svg';

export const SocialsMedia = () => {
  return (
    <div className={styles.bottom__info}>
      <Link className={styles.icon__media__block} href="https://twitter.com/">
        <SVG_TWITTER />
      </Link>
      <Link className={styles.icon__media__block} href="https://instagram.com/">
        <SVG_INSTAGRAM />
      </Link>
      <Link className={styles.icon__media__block} href="https://discord.com/">
        <SVG_DISCORD />
      </Link>
    </div>
  );
};
