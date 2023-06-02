/* eslint-disable no-console */
import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import useStyles from './styles';
import {
  Actors,
  Movies,
  MovieInformation,
  Profile,
  NavBar,
  NotFound,
} from './index';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar></NavBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path='/' element={<Movies />}></Route>
          <Route path='/actors' element={<Actors />}></Route>

          <Route path='/profile/:id' element={<Profile />}></Route>

          <Route path='/movie/:id' element={<MovieInformation />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}
export default App;
