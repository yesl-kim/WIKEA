import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <div>
        <nav className="breadcrumb_nav">
          <ol className="breadcrumb_list">
            <li className="breadcrumb_item">
              <a href="/">
                <span>... &nbsp; &gt; &nbsp;</span>
              </a>
            </li>
            <li className="lg-only">
              <a href="/">
                <span>제품 &nbsp; &gt; &nbsp;</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>화분/식물 &nbsp; &gt; &nbsp;</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>물뿌리개</span>
              </a>
            </li>
            <li className="lg-only">
              <a href="/">
                <span> &nbsp;&gt; SESAMFRÖN 세삼프뢴 &nbsp;</span>
              </a>
            </li>
          </ol>
        </nav>
        <hr />
      </div>
    );
  }
}

export default Breadcrumb;
