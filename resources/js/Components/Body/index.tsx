import React from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Search } from "./Search";
import { JobsList } from "./JobsList";
import {Route} from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Body = (
    props: any
) => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Search></Search>
        </Grid>
        <Grid item sm={12}>
          <JobsList></JobsList>
        </Grid>
      </Grid>
    </Box>
    )
}