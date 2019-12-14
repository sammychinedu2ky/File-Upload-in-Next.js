
import { useFetchUser } from '../lib/user'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import  Dialog from '../components/dialog'
import Button from '@material-ui/core/Button';

import Link from '../src/Link';
import Layout from '../components/layout'
import Head from '../components/header'


export default  function Studio() {
    const { user, loading } = useFetchUser({ required: true })
    console.log(user,loading)
  return ( <>
    {user &&
    <>
    <Layout/>
    <Container maxWidth="sm">
    
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
       Hey {user.name}!! Click on the button to upload a file
        </Typography>
        
        <Dialog/>
      </Box>
    </Container>
    </>
    }
    </>
  );
}

