import { Button, Container, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  fab : {
      position : "fixed",
      bottom : 20,
      right : 20,

  },
  container : {
      width : 500,
      height : 500,
      background : "white",
      position : "absolute",
      top : 0,
      bottom : 0,
      left : 0,
      right : 0,
      margin :  "auto",
      [theme.breakpoints.down("sm")]:{
          height : "100vh",
          width : "100vw",      }
  },
  form : {
      padding : theme.spacing(1)
  },
  item : {
      marginBottom : theme.spacing(2)
  }

}))

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const Add = () => {

  const classes = useStyles()
  const [open,setOpen] = useState(false)
  const [openAlert,setOpenAlert] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  return (<>
    <Tooltip title="Add" aria-label="add" onClick = {() => {setOpen(!open)}}>
  <Fab color="secondary" className={classes.fab}>
    <AddIcon />
  </Fab>
</Tooltip>
<Modal open = {open}>
    <Container className = {classes.container}>
        <form className = {classes.form}>
            <div className = {classes.item}>
            <TextField id="standard-basic" label="Title" size = "small"  style = {{width : "100%"}}/></div>
            <div className = {classes.item}>
            <TextField 
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue="Tell your story..."
            variant="outlined" size = "small" style = {{width : "100%"}}
            />
            </div>
            <div className = {classes.item}>
                <TextField select label = "visibility" value = "Public">
                    <MenuItem value = "Public">Public</MenuItem>
                    <MenuItem value = "Private">Private</MenuItem>
                    <MenuItem value = "Unlisted">Unlisted</MenuItem>

                </TextField>
            </div>

            <div className = {classes.item}>
            <FormLabel component="legend">Who Can Comment?</FormLabel>
            <RadioGroup>
            <FormControlLabel value="Everybody" control={<Radio size = "small"/>} label="Everybody" />
            <FormControlLabel value="My Friends" control={<Radio size = "small"/>} label="My Friends" />
            <FormControlLabel value="Nobody" control={<Radio size = "small"/>} label="Nobody" />
            <FormControlLabel value="custom(Premium)" disabled control={<Radio size = "small"/>} label="custom(Premium)" />
  </RadioGroup>
            </div>

            <div className = {classes.item}>
                <Button variant = "outlined" color ="primary" style = {{marginRight : 20}}
                onClick = {() => setOpenAlert(true)}
                >Create</Button>
                <Button variant = "outlined" color ="secondary" style = {{marginRight : 20}}
                onClick = {() => {setOpen(false)}}
                >Cancel</Button>


            </div>


        </form>
    </Container>
</Modal>

<Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}
anchorOrigin = {{vertical : "bottom", horizontal : "left"}}
>
  <Alert onClose={handleClose} severity="success">
    This is a success message!
  </Alert>
</Snackbar>
    </>
    );
};

export default Add;