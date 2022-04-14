import { useEffect, useState } from "react";
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
import moment from "moment";

const NewsComponent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);

  const loadData = async () => {
    await fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/nubelula.wordpress.com/posts/"
    )
      .then((request) => request.json())
      .then((blog) => blog.posts)
      .then((single_post) => {
        setPost(single_post);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
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
        height={770}
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
          {post.map((single_post, index) => (
            <Grid item xs={1} md={3} ml={1} key={index}>
              <Card
                style={{ backgroundColor: "white" }}
                sx={{ maxWidth: 270, maxHeight: 280 }}
              >
                <CardMedia
                  component="img"
                  height="80"
                  image={ReptileImage}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography color="common.black" variant="h5" component="div">
                    {single_post.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="common.black">
                    {moment(single_post.date).format("L")}
                  </Typography>
                  <Typography color="common.black" variant="body2">
                    {single_post.content.replace("<p>", "").replace("</p>", "")}
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={single_post.URL} target="_blank">
                    Read the article
                  </Button>
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
