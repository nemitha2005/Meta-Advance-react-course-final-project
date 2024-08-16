import React from "react";
import { Box, Text, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Chakra UI. It showcases my skills, projects, and contact information.",
      imageUrl:
        "https://s3-alpha.figma.com/hub/file/2817581526/ecd39a76-4f95-42b7-9198-65b41e0a06c6-cover.png",
    },
    {
      title: "E-commerce Store",
      description:
        "A fully functional e-commerce store developed with React and Node.js, featuring user authentication, product listings, and a shopping cart.",
      imageUrl:
        "https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg",
    },
    {
      title: "Weather App",
      description:
        "A responsive weather app built with React and OpenWeatherMap API. It displays real-time weather information for any city.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxKA7HvO10GTQBbTTroY57QxgaI-W6kfyUw&s",
    },
    {
      title: "Task Manager",
      description:
        "A task management app created using React and Firebase. It allows users to add, edit, and delete tasks, with real-time updates.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEMMFcCYD23Ga7tbEIsoc3ZVESwP3L8VVAw&s",
    },
  ];

  return (
    <Box id="projects" bg="#15522E" p={8}>
      <Box maxW="800px" mx="auto" px={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
          My Projects
        </Text>
        <SimpleGrid columns={[1, null, 2]} spacing={8}>
          {projects.map((project, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              bg="white"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width="100%"
                height="200px"
                objectFit="cover"
              />
              <Box p={4}>
                <Text fontWeight="bold" color="black" fontSize="xl">
                  {project.title}
                </Text>
                <Text mt={2} color="gray.600">
                  {project.description}
                </Text>
                <Button
                  rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
                  variant="link"
                  colorScheme="teal"
                  mt={4}
                >
                  See More
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
