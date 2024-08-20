import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Features({ title, description, highlight, subtext }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 20,
        background: "white",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "#19154e", fontWeight: 800, marginBottom: 2 }}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ color: "#5b5e76", maxWdith: "600px", marginBottom: 4 }}
      >
        {description}
      </Typography>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "#7421fc",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          maxWidth: "150px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          {highlight}
        </Typography>
        <Typography varaint="body1">{subtext}</Typography>
      </Paper>
    </Box>
  );
}

export default Features;
