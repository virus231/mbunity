import {FC} from 'react'
import styles from "./ContactInfo.module.scss"
import {InfoIcon} from "~/components/InfoIcon/InfoIcon";
import Link from "next/link";
import SVG_PHONE from '~/svg/phone.svg';
import SVG_EMAIL from '~/svg/email.svg';
import SVG_LOCATION from '~/svg/location.svg';
import {SocialsMedia} from "~/components/ContactUsInfo/SocialsMedia";
import {ContactUsForm} from "~/components/ContactUsInfo/Form/ContactUsForm";

export type ContactInfoProps = {}

export const ContactUsInfo: FC<ContactInfoProps> = ({}) => {
    return <section className={styles.form__block}>
        <div className={styles.left__block}>
            <div className={styles.top__block}>
                <h5>
                    Contact Information
                </h5>
                <p>
                    Say something to start a live chat!
                </p>
            </div>

            <div className={styles.main__info}>
                <InfoIcon icon={<SVG_PHONE/>} info={<Link href="/">+1012 3456 789</Link>}/>
                <InfoIcon icon={<SVG_EMAIL/>} info={<Link href="/">demo@gmail.com</Link>}/>
                <InfoIcon icon={<SVG_LOCATION/>} info={<Link href="/">132 Dartmouth Street Boston, Massachusetts 02156 United States</Link>}/>
            </div>
            <SocialsMedia/>
        </div>
        <div className={styles.right__block}>
            <ContactUsForm/>
        </div>
    </section>
}