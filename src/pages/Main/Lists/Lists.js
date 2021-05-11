import React from 'react';
import ListPath from './ListPath/ListPath';
import ItemExplanation from './ItemExplanation/ItemExplanation';
import ListBtn from './ListBtn/ListBtn';
import Products from './Products/Products';
import Header from '../../../components/Header/Header';
import Message from '../../../components/Header/Message';
import './Lists.scss';

class Lists extends React.Component {
  render() {
    return (
      <>
        <Message />
        <Header />
        <main className="container">
          <div className="row">
            <div className="col-lg-1 col-md-1"></div>
            <div className="col-lg-12 col-md-11">
              <ListPath />
              <ItemExplanation />
              <ListBtn />
              <Products />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Lists;
