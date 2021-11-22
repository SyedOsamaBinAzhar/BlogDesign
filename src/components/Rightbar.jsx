import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from "@material-ui/core"
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container : {
    paddingTop : theme.spacing(10),
    position : "sticky",
    top : 0
  },
  title : {
      fontSize : 16,
      fontWeight: 500,
  },
  link : {
    marginRight : theme.spacing(2),
    fontSize : 16,
    color : "black",
  }
}))


const Rightbar = () => {

  const classes = useStyles()

  return (<Container className = {classes.container}>
    <Typography
    className = {classes.title}
    gutterBottom
    >Online Friends</Typography>

  <AvatarGroup max={6} style = {{marginBottom : 20}}>
  <Avatar alt="Remy Sharp" src="https://v4.mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://v4.mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="" />
  <Avatar alt="Agnes Walker" src="https://v4.mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/6.jpg" />
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/7.jpg" />
  <Avatar alt="Trevor Henderson" src="https://v4.mui.com/static/images/avatar/8.jpg" />


</AvatarGroup>

<Typography
    className = {classes.title}
    gutterBottom
    >Image list</Typography>

<ImageList rowHeight={100} style={{marginBottom : 20}} cols={2}>
    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" />
    </ImageListItem>

    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" />
    </ImageListItem>

    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/camera.jpg" />
    </ImageListItem>

    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/morning.jpg" />
    </ImageListItem>

    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/morning.jpg" />
    </ImageListItem>

    <ImageListItem >
      <img src="https://v4.mui.com/static/images/image-list/hats.jpg" />
    </ImageListItem>
</ImageList>

<Typography className = {classes.title}>
  Categories
</Typography>

<Link href="#"  className = {classes.link} variant = "body2">
    Sports
  </Link>

  <Link href="#" className = {classes.link} variant = "body2">
    Photography
  </Link>

  <Divider light/>
  <Link href="#" className = {classes.link} variant = "body2">
    Movies
  </Link>

  <Link href="#" className = {classes.link} variant = "body2">
    Science
  </Link>

  </Container>);
};

export default Rightbar;