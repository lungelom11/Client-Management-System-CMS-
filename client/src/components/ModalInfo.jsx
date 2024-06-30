/* eslint-disable react/prop-types */
import { ModalContent, ModalHeader, ModalCloseButton } from "@chakra-ui/react";
import LoginForm from "../LoginForm";

const ModalInfo = ({ initialRef }) => {
  return (
    <ModalContent>
      <ModalHeader>Login to your account</ModalHeader>
      <ModalCloseButton />

      <LoginForm initialRef={initialRef} />
    </ModalContent>
  );
};

export default ModalInfo;
