import React from "react";
import {
  Box,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSubmit } from "./hooks/useSubmit";
import { useAlertContext } from "./context/alertContext";

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const { submit, isLoading } = useSubmit();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      type: Yup.string().required("Please select an enquiry type"),
      comment: Yup.string().required("Please enter a message"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const result = await submit(values);
      if (result.type === "success") {
        onOpen({
          type: "success",
          message: `Thank you, ${values.firstName}! Your message has been sent.`,
        });
        resetForm();
      } else {
        onOpen({
          type: "error",
          message: "Something went wrong, please try again.",
        });
      }
    },
  });

  return (
    <Box bg="#2A1758">
      <Box p={4} maxW="800px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={4} color="white" pb={5}>
          Contact Me
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <FormControl
            isInvalid={formik.touched.firstName && formik.errors.firstName}
          >
            <FormLabel htmlFor="firstName" color="white">
              First Name
            </FormLabel>
            <Input
              id="firstName"
              color="white"
              {...formik.getFieldProps("firstName")}
            />
            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.email && formik.errors.email}
            mt={4}
          >
            <FormLabel htmlFor="email" color="white">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              color="white"
              {...formik.getFieldProps("email")}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.type && formik.errors.type}
            mt={4}
          >
            <FormLabel htmlFor="type" color="white">
              Type of Enquiry
            </FormLabel>
            <Select id="type" color="white" {...formik.getFieldProps("type")}>
              <option value="" label="Select enquiry type" />
              <option value="feedback" label="Feedback" />
              <option value="question" label="Question" />
              <option value="other" label="Other" />
            </Select>
            <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={formik.touched.comment && formik.errors.comment}
            mt={4}
          >
            <FormLabel htmlFor="comment" color="white">
              Message
            </FormLabel>
            <Textarea
              id="comment"
              color="white"
              {...formik.getFieldProps("comment")}
            />
            <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
          </FormControl>

          <Box display="flex" justifyContent="center" mt={4}>
            <Button
              width="100%"
              bg="#7F5AD5"
              isLoading={isLoading}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMeSection;
