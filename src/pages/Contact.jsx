import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { Send } from "@mui/icons-material";

export const Contact = () => {
  const hnadlefrom = (formData) => {
    const fromInputData = Object.fromEntries(formData.entries());
    console.log(fromInputData);
  };

  return (
    <Container maxWidth="sm" className="py-10 px-4 sm:px-6 md:px-8">
      <Box
        className="shadow-lg rounded-lg p-4 sm:p-6 md:p-8"
        sx={{ backgroundColor: "#1e1e1e", color: "white" }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          className="text-center font-bold mb-6 text-xl sm:text-2xl md:text-3xl"
        >
          Contact Us
        </Typography>

        {/* Form */}
        <form className="flex flex-col gap-4" action={hnadlefrom}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            className="bg-gray-800 text-white rounded-lg"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ input: { color: "white" } }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            className="bg-gray-800 text-white rounded-lg"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ input: { color: "white" } }}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            className="bg-gray-800 text-white rounded-lg"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{ textarea: { color: "white" } }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            className="mt-4 text-white bg-blue-600 hover:bg-blue-800 text-sm sm:text-base"
            endIcon={<Send />}
            sx={{
              padding: "10px 20px",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};
