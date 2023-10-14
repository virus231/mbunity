import '../styles/globals.scss';
import type { Metadata } from 'next';
import { Header } from '~/components/Header/Header';
import styles from './page.module.scss';
import { inter, poppins, roboto } from '~/config/fonts';
import { Footer } from '~/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Mbunity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto.variable} ${poppins.variable} ${poppins.variable}`}
      >
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
