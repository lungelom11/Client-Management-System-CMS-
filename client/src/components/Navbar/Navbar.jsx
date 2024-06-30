import "./navbar.css";
import { Link } from "react-router-dom";
import { Modal, ModalOverlay } from "@chakra-ui/react";
import ModalInfo from "../../components/ModalInfo";

import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const token = localStorage.getItem("token");

  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="logo">
            <span>{/* <FontAwesomeIcon icon={faHouse} /> */}</span>
            <h3>Client Management System</h3>
          </div>

          <div className="menu">
            <ul className="menu-items">
              <li>
                <Link className="menu-link" to="/">
                  Home
                </Link>
              </li>
              <li>About</li>
              <li>
                {token ? (
                  <div className="pro_img">
                    <img
                      src="https://i.imgur.com/rgiY5VZ.png"
                      alt="profile_picture"
                    />
                  </div>
                ) : (
                  <button className="login-btn" onClick={onOpen}>
                    Login
                  </button>
                )}
              </li>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalInfo initialRef={initialRef} />
              </Modal>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
