import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Map from "./Map";

const ContactForm = () => {
  return (
    <>
      <div>
        <Map />
      </div>
      <Box>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <BottomNavigation sx={{ width: 500 }} showLabels>
            <BottomNavigationAction label="Contacto" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Lugar" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
};

export default ContactForm;
