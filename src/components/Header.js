import React, { useState, useEffect } from "react";
import { HStack, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [lastScrollY]);

  return (
    <Box
      bg="black"
      position="fixed"
      width="100%"
      top={isVisible ? "0" : "-100px"}
      transition="top 0.3s"
      zIndex="999"
    >
      <Box maxW="900px" mx="auto" color="white" p={4}>
        <HStack justifyContent="space-between">
          <HStack spacing={4}>
            <a
              href="https://github.com/nemitha2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="24px" />
            </a>
            <a
              href="https://www.linkedin.com/in/nemitha-wijerathna-7a715b299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size="24px" />
            </a>
            <a
              href="https://www.facebook.com/nemitha005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size="24px" />
            </a>
            <a
              href="https://www.instagram.com/_nemith.aaaa5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size="24px" />
            </a>
          </HStack>
          <HStack spacing={4}>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
