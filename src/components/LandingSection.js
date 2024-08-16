import React from "react";
import { Box, VStack, Text, Image } from "@chakra-ui/react";

const LandingSection = () => {
  return (
    <Box bg="#2B6CB0" p={8}>
      <Box id="landing" maxW="800px" mx="auto" p={40} minH="50vh">
        <VStack spacing={6}>
          <Image
            borderRadius="full"
            boxSize="100px"
            src="https://i.pravatar.cc/150?img=7"
            alt="Avatar"
          />
          <Text fontSize="lg" color="white">
            Hello, I'm Nemitha!
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="white"
            textAlign="center"
          >
            A frontend developer specialized in React
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default LandingSection;
