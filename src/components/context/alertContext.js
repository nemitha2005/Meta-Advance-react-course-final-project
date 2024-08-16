import React, { createContext, useContext, useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const onOpen = ({ type, message }) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <AlertContext.Provider value={{ onOpen }}>
      {children}
      {alert && (
        <Box position="fixed" bottom="10px" right="10px">
          <Alert status={alert.type} variant="subtle">
            <AlertIcon />
            <AlertTitle>
              {alert.type === "success" ? "Success!" : "Error!"}
            </AlertTitle>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        </Box>
      )}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
