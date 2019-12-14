import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Input from '@material-ui/core/Input';
import LinearProgress from '@material-ui/core/LinearProgress';
import fetch from 'isomorphic-unfetch'

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles(theme=>({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [show, setShow] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);
  const handleClose = () => {
   onClose();
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  const handleSubmit=(e)=>{
    setShow(true)
    let {target} = e
   let formData = new FormData(target)
    console.log(formData)
    console.log(formData.keys().next().value)
  
    console.log(e.target)
    e.preventDefault()
    fetch ('/api/file',{
        method:'POST',
        body: formData
    }).then(response => response.json())
    .then(data => {
      setShow(false)
      setUploaded(true)
      console.log(data)
    }).catch(error => {
        console.error('this is a 404')
      })
   
  }
    

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Upload your videos</DialogTitle>
      <div style={{margin:20}}>
      <form onSubmit={handleSubmit} >
      <Input  type='text' name='file name' placeholder='Name of file'/><br/><br/>
      <Input  type='file' name='uploads'/><br/><br/>
      <Button variant="outlined" color="primary" type='submit'>
        Submit
      </Button>
      <br/><br/>
      {show && <LinearProgress />}
      {uploaded && <p>Uploaded Successfully</p>}
     </form>
    </div>
    </Dialog>
  );
}



export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
   
  };

  return (
    <div>
    
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open Dialog To Upload
      </Button>
      <SimpleDialog  open={open} onClose={handleClose} />
    </div>
  );
}
