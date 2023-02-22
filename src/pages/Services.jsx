import React from 'react'
import Cards from '../components/Cards';
import Vue from '../assets/vue.png'
import react_logo from '../assets/react.png'
import symfony_php from '../assets/symfony_php.png'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
function Services () {
  return (
  <div className="mt-5">
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} columns={9}>
       <Grid item xs={3}>

      <Cards name="Vue.js" image={Vue} description="le fameux framework javascript" />
      </Grid>
      <Grid  item xs={3}> 
      <Cards name="Symfony" image={symfony_php} description="Avec bien sûr PHP" />
      </Grid>
      <Grid  item xs={3}> 
      <Cards name="React" image={react_logo} description="le fameux framework javascript" />
      </Grid>
      </Grid>
      </Box>
      </div>
  )
}


export default Services;
