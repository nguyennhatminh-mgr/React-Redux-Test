import React from 'react';
import { withStyles } from '@material-ui/core';
import {  ThemeProvider } from '@material-ui/core/styles';

import styles from './styles';
import Taskboard from '../Taskboard';
import theme from '../../commons/Theme/index';

import {Provider} from 'react-redux';
import configureStore from '../../redux/configureStore';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';


const store = configureStore();

function App(props) {
  return (
    <Provider store={store}>
      <ThemeProvider theme = { theme }>
        <ToastContainer />
        <GlobalLoading />
        <Modal />
        <Taskboard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
