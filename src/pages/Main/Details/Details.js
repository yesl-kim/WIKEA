import React from 'react';
import Message from '../../../components/Header/Message';
import Header from '../../../components/Header/Header';
import Main from './Main/Main.js';

class Details extends React.Component {
  render() {
    return (
      <>
        <Message />
        <Header />
        <Main />
      </>
    );
  }
}

export default Details;
