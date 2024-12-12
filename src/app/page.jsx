"use client";
import * as React from "react";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} size={{ xs: 12, md: 7, lg: 8 }}>
        <Grid size={{ xs: 12, md: 5, lg: 3 }}>
          <Item>
            <Box component="" aria-labelledby="category-b" sx={{ pl: 2 }}>
              SALE
            </Box>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 7, lg: 9 }}>
          <Item>
            <Box
              id="category-b"
              sx={{ fontSize: "12px", textTransform: "uppercase" }}
            >
              Category B
            </Box>
            <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
              <li>Link 2.1</li>
              <li>Link 2.2</li>
              <li>Link 2.3</li>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
