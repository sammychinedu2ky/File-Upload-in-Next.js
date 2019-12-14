import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Link from '../src/Link';
import Linker from 'next/link'
import {useRouter} from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function  Header({ user, loading }){
  const classes = useStyles();
  const router = useRouter()
  let route = (router.pathname.replace('/',''));
 
  let goto = route=='portal'?'/':'portal'
  let button = goto=='/'?'home':'portal'
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Edutube
          </Typography>
          <Button variant="contained" color="primary" component={Link} href={goto}>
          {button}
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}



