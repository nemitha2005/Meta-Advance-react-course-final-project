import React from "react";
import { useAlertContext } from "../context/alertContext";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

const AlertDisplay = () => {
  const { alert, onClose } = useAlertContext();

  if (!alert) return null;

  return (
    <Alert status={alert.type}>
      <AlertIcon />
      <AlertTitle>
        {alert.type === "success" ? "Success!" : "Error!"}
      </AlertTitle>
      <AlertDescription>{alert.message}</AlertDescription>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={onClose}
      />
    </Alert>
  );
};

export default AlertDisplay;
