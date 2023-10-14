'use client';
import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from '~/hooks/useMediaQuery';
import { WIDTH_WIDE_TABLET } from '~/constants/constants';

const ModalsBackground = dynamic(
  () => import('~/components/Modals/ModalsBackground/ModalsBackground'),
  { ssr: false },
);
const BurgerMenu = dynamic(
  () => import('~/components/Modals/BurgerMenu/BurgerMenu'),
  { ssr: false },
);

export enum ModalType {
  // eslint-disable-next-line no-unused-vars
  burgerMenu = 'burgerMenu',
}

export type ModalProps = {
  modalVisible: boolean;
  type?: ModalType | null;
};

type ModalContextType = {
  type?: ModalType | null;

  // eslint-disable-next-line no-unused-vars
  showModal: (newProps: ModalProps) => void;
  closeModal: () => void;
  openBurgerMenu: () => void;
};

const modalContextDefaultValue: ModalContextType = {
  type: null,

  showModal: () => null,
  closeModal: () => null,

  openBurgerMenu: () => null,
};

const ModalContext = createContext<ModalContextType>(modalContextDefaultValue);

export function useModals() {
  return useContext(ModalContext);
}

export function ModalsProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isWideTablet = useMediaQuery(WIDTH_WIDE_TABLET);

  const [modalProps, setModalProps] = useState<ModalProps>({
    modalVisible: false,
    type: null,
  });

  useEffect(() => {
    const shouldDisableScroll = modalProps.type != null;

    document.body.classList.toggle('disable-scroll', shouldDisableScroll);
  }, [modalProps.type]);

  useEffect(() => {
    // window.sessionStorage.setItem('scroll', '0');
    document.body.classList.toggle('disable-scroll', false);
    HandleCloseModal();
  }, [router]); // eslint-disable-line react-hooks/exhaustive-deps

  const HandleShowModal = (newProps: ModalProps) =>
    setModalProps({
      ...newProps,
      modalVisible: true,
    });

  const HandleCloseModal = () =>
    setModalProps({
      ...modalProps,
      modalVisible: false,
      type: null,
    });

  const HandleOpenBurgerMenuModal = () =>
    setModalProps((old) => ({
      ...old,
      type: ModalType.burgerMenu,
      modalVisible: true,
    }));

  const value = {
    type: modalProps.type,
    showModal: HandleShowModal,
    closeModal: HandleCloseModal,
    openBurgerMenu: HandleOpenBurgerMenuModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}

      <ModalsBackground>
        {!isWideTablet ? (
          <BurgerMenu isVisible={modalProps.type === ModalType.burgerMenu} />
        ) : null}
      </ModalsBackground>
    </ModalContext.Provider>
  );
}
