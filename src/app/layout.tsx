import '../styles/globals.scss';
import type { Metadata } from 'next';
import { Header } from '~/components/Header/Header';
import styles from '../styles/pages/contact.module.scss';
import { inter, poppins, roboto } from '~/config/fonts';
import { Footer } from '~/components/Footer/Footer';
import {ModalsProvider} from "~/context/ModalProvider";

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
      <ModalsProvider>
          <Header />
          <main className={styles.main}>
              {children}
          </main>
          <Footer />
      </ModalsProvider>
      </body>
    </html>
  );
}
