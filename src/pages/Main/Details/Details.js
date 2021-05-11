import React from 'react';
import Message from './Header/Message.js';
import Header from './Header/Header.js';
// import Main from './Main/Main.js';

class Details extends React.Component {
  render() {
    return (
      <>
        <Message />
        <Header />
        {/* <Main /> */}
      </>
    );
  }
}

export default Details;
