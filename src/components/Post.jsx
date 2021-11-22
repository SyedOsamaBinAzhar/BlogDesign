import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography} from "@material-ui/core"

//importing images
import postImage1 from "../Assets/postImage1.jpg"


const useStyles = makeStyles((theme) => ({
  media : {
      height : 250,
      [theme.breakpoints.down("sm")] : {
          height : 150
      }
  },
  card : {
      marginBottom : theme.spacing(5)
  }
}))


const Post = () => {

  const classes = useStyles()

  return <Card className = {classes.card}>
            <CardActionArea>
                <CardMedia
                className = {classes.media}
                image = {postImage1}
                title = "My Post"
                />
                <CardContent>
                    <Typography variant = "h5" gutterBottom>My post</Typography>
                    <Typography variant = "body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam totam quos esse sequi hic natus! Repudiandae rerum deleniti recusandae dignissimos, nulla id perspiciatis 
                    velit voluptate minus tempora nostrum delectus debitis.
                    </Typography>

                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size = "small" color = "primary">Share</Button>
                <Button size = "small" color = "primary">Learn More</Button>
            </CardActions>

        </Card>
};

export default Post;