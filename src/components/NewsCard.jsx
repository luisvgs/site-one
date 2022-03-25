import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledEngineProvider } from "@mui/material/styles";
import ReptileImage from "./contemplative-reptile.jpg";

const NewsComponent = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Box
        className="news-background"
        sx={{
          p: 2,
          m: 1,
          flexgrow: 1,
          justifyContent: "center",
          borderRadius: 1,
        }}
        height={740}
        width={1080}
      >
        <Typography
          color="common.white"
          variant="h6"
          gutterBottom
          component="div"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant
          morbi tristique senectus et netus et malesuada fames.
        </Typography>
        <Grid
          sx={{
            p: 1,
            m: 1,
            flexgrow: 1,
            justifyContent: "center",
            borderRadius: 1,
          }}
          container
          spacing={3}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Grid item xs={1} md={3} ml={1} key={index}>
              <Card
                style={{ backgroundColor: "#1c1b1b" }}
                sx={{ maxWidth: 270, maxHeight: 280 }}
              >
                <CardMedia
                  component="img"
                  height="100"
                  image={ReptileImage}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography color="common.white" variant="h5" component="div">
                    Latest news
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="common.white">
                    Lorem ipsim dolot sit amet
                  </Typography>
                  <Typography color="common.white" variant="body2">
                    morbi tristique senectus et netus et malesuada fames.
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Leer mas</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledEngineProvider>
  );
};

export default NewsComponent;
