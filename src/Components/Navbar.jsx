/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import PixIcon from "@mui/icons-material/Pix";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// @ts-expect-ignore

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.5rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left Side Here */}
      <FlexBetween gap="0.75rem">
        <ThunderstormIcon  />
        <Typography variant="h4" fontSize="16px">
          EcoPulse
        </Typography>
      </FlexBetween>
      {/* Right side here */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
