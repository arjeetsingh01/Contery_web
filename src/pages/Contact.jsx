import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { Send } from "@mui/icons-material"; // Import Send icon

export const Contact = () => {
  const hnadlefrom = (formData)=>{
      // console.log(formData.entries());
      const fromInputData = Object.fromEntries(formData.entries());
      console.log(fromInputData);
  }

  return (
    <Container maxWidth="sm" className="py-12">
      <Box
        className="bg-white shadow-lg rounded-lg p-6"
        sx={{ backgroundColor: "#1e1e1e", color: "white" }}
      >
        {/* Heading */}
        <Typography variant="h4" className="text-center font-bold mb-6">
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

          {/* Submit Button with Send Icon */}
          <Button
            type="submit"
            variant="contained"
            className="mt-4 bg-blue-600 hover:bg-blue-800"
            endIcon={<Send />} // Add send icon here
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};
