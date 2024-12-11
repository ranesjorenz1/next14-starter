"use client";
import { Container, Box } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
const Home = () => {
  return (
    <Container maxWidth="mx">
      <Grid2 container spacing={0}>
        <Grid2 size={4} sx={{ bgcolor: "#333333", height: "75vh" }}></Grid2>
        <Grid2 size={8} sx={{ bgcolor: "#f5f5dc", height: "75vh" }}></Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;
