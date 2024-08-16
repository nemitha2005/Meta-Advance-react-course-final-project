import React from 'react';
import { HStack, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="black">
    <Box maxW="900px" mx="auto" color="white" p={4}>
      <HStack justifyContent="space-between">
        <HStack spacing={4}>
          <a href="https://github.com/nemitha2005" target="_blank" rel="noopener noreferrer">
            <FaGithub size="24px" />
          </a>
          <a href="https://www.linkedin.com/in/nemitha-wijerathna-7a715b299" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="24px" />
          </a>
          <a href="https://www.facebook.com/nemitha005" target="_blank" rel="noopener noreferrer">
            <FaFacebook size="24px" />
          </a>
          <a href="https://www.instagram.com/_nemith.aaaa5" target="_blank" rel="noopener noreferrer">
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
