import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard/Index";
import HVACSchedule from "./Components/HVAC/HVACSchedule";
import SignIn from "./Components/Auth/SignIn";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            {isLoggedIn && <Navbar />}
            <Routes>
              <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <SignIn onSignIn={handleSignIn} />} />
              {isLoggedIn && (
                <>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/hvacControl" element={<HVACSchedule />} />
                </>
              )}
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;