import { createContext, useState } from "react";
import Modal from "../components/shared/Modal/Modal";
import { IModalProps } from "../models/modal";

interface IProps {
  children: any;
}

export const ModalContext = createContext({
  showModal(s: IModalProps) {},
  hideModal() {},
});

const ModalContextProvider = ({ children }: IProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState<IModalProps>();

  const showModal = (s: IModalProps) => {
    setModalInfo(s);
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <Modal {...modalInfo} open={openModal} handleClose={setOpenModal} />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
