import styles from './Footer.module.scss';
import { InfoIcon } from '~/components/InfoIcon/InfoIcon';
import SVG_PHONE from '~/svg/phone.svg';
import Link from 'next/link';
import SVG_EMAIL from '~/svg/email.svg';
import SVG_LOCATION from '~/svg/location.svg';
import { FOOTER_LINKS } from '~/config/footer';
import { NewsletterBlock } from '~/components/Footer/NewsletterBlock/NewsletterBlock';
import {Logo} from "~/components/Logo/Logo";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.logo}>
            <Logo color="white" fontSize="36px"/>

        </div>

      <div className={styles.container}>
        <hr />
        <div className={styles.footer__info}>
          <div className={styles.footer__info_block}>
            <h6>Reach us</h6>
            <div className={styles.main__info}>
                <InfoIcon
                    icon={<SVG_PHONE />}
                    info={<Link href="tel:+10123456789">+1012 3456 789</Link>}
                />
                <InfoIcon
                    icon={<SVG_EMAIL />}
                    info={<Link href="mailto:demo@gmail.com">demo@gmail.com</Link>}
                />
                <InfoIcon
                    icon={<SVG_LOCATION />}
                    info={
                        <Link href="https://www.google.com/maps/place/132+Dartmouth+St,+Boston,+MA+02116,+%D0%A1%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D1%96+%D0%A8%D1%82%D0%B0%D1%82%D0%B8+%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B8/@42.3467604,-71.0761182,17z/data=!3m1!4b1!4m6!3m5!1s0x89e37a0d715622b3:0x5b2af19970952585!8m2!3d42.3467604!4d-71.0761182!16s%2Fg%2F11c1zptc6r?entry=ttu">
                            132 Dartmouth Street Boston, Massachusetts 02156 United States
                        </Link>
                    }
                />
            </div>
          </div>
          {FOOTER_LINKS.map((item) => (
            <div key={item.id} className={styles.footer__info_block}>
              <h6 className={styles.title}>{item.title}</h6>
              <ul className={styles.list}>
                {item.menu.map((menu, index) => (
                  <li key={item.id + index}>
                    <Link href={menu.link}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <NewsletterBlock />
        </div>
      </div>
    </footer>
  );
};
