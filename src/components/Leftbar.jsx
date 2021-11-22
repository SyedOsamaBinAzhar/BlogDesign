import { makeStyles, Container, Typography} from "@material-ui/core"

//importing icons
import { Home } from "@material-ui/icons";
import PersonTwoToneIcon from '@material-ui/icons/PersonTwoTone';
import ListTwoToneIcon from '@material-ui/icons/ListTwoTone';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import VideocamIcon from '@material-ui/icons/Videocam';
import AppsIcon from '@material-ui/icons/Apps';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import WebTwoToneIcon from '@material-ui/icons/WebTwoTone';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({

  container : {
    paddingTop : theme.spacing(10),
    backgroundColor : theme.palette.primary.main,
    color : "white",
    height : "100vh",
    position : "sticky",
    top : 0,
    [theme.breakpoints.up("sm")] : {
      backgroundColor:"white",
      border : "1px solid #ece7e7",
      color : "#555"
    }
  },

  item : {
    display : 'flex',
    alignItems : "center",
    marginBottom : theme.spacing(4),
  [theme.breakpoints.up("sm")] : {
    marginBottom : theme.spacing(3),
    cursor : "pointer"
  }

  },
  
  icons : {
    [theme.breakpoints.up("sm")] : {
      fontSize : "18px",
    }
  },
  text : {
    fontWeight : 500,
    marginLeft : theme.spacing(1),
    [theme.breakpoints.down("sm")] : {
      display : "none"
    } 
  }
}))


const Leftbar = () => {

  const classes = useStyles()


  return (<Container className = {classes.container}>
          <div className = {classes.item}>
            <Home/>
            <Typography className = {classes.text}>Home</Typography>
          </div>
          <div className = {classes.item}>
            <PersonTwoToneIcon/>
            <Typography className = {classes.text}>Friends</Typography>
          </div>
          <div className = {classes.item}>
            <ListTwoToneIcon/>
            <Typography className = {classes.text}>Lists</Typography>
          </div>
          <div className = {classes.item}>
            <CameraAltIcon/>
            <Typography className = {classes.text}>Cameras</Typography>
          </div>
          <div className = {classes.item}>
            <VideocamIcon/>
            <Typography className = {classes.text}>Videos</Typography>
          </div>
          <div className = {classes.item}>
            <AppsIcon/>
            <Typography className = {classes.text}>Apps</Typography>
          </div>
          <div className = {classes.item}>
            <RemoveFromQueueIcon/>
            <Typography className = {classes.text}>Collections</Typography>
          </div>
          <div className = {classes.item}>
            <WebTwoToneIcon/>
            <Typography className = {classes.text}>Marketplace</Typography>
          </div>
          <div className = {classes.item}>
            <SettingsIcon/>
            <Typography className = {classes.text}>Settings</Typography>
          </div>
          <div className = {classes.item}>
            <ExitToAppIcon/>
            <Typography className = {classes.text}>Logout</Typography>
          </div>
      </Container>);
};

export default Leftbar;