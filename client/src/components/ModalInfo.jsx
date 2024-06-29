/* eslint-disable react/prop-types */
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";

const ModalInfo = ({ initialRef }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <ModalContent>
      <ModalHeader>Login to your account</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            focusBorderColor="#e69410"
            ref={initialRef}
            placeholder="Email"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              focusBorderColor="#e69410"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <button className="login-btn">Login</button>
      </ModalFooter>
    </ModalContent>
  );
};

export default ModalInfo;
