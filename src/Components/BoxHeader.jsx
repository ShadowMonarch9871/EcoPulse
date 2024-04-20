import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import PropTypes from 'prop-types';


const BoxHeader = ({ icon, title, subtitle, sideText,height}) => {

  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem" height={height}>
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

BoxHeader.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  sideText: PropTypes.string.isRequired,
  height: PropTypes.string
};

export default BoxHeader;