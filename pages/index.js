import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Button from '@material-ui/core/Button';

import Link from '../src/Link';
import Layout from '../components/layout'
import Head from '../components/header'


export default function Main() {
  return (
    <>
    <Layout/>
    <Container maxWidth="sm">
    
      <Box my={4}>
        <Typography variant="h6" component="h1" gutterBottom>
         Click the portal button to save your videos online
        </Typography>
        
      </Box>
    </Container>
    </>
  );
}
