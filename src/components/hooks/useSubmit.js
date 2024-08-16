import { useState } from "react";

export const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (values) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const isSuccess = Math.random() >= 0.5;

      const result = isSuccess
        ? { type: "success", message: "Form submitted successfully" }
        : { type: "error", message: "Form submission failed" };

      setResponse(result);
      return result;
    } catch (error) {
      const result = {
        type: "error",
        message: "Form submission failed due to an error",
      };
      setResponse(result);
      return result;
    } finally {
      setIsLoading(false);
    }
  };

  return { submit, isLoading, response };
};
