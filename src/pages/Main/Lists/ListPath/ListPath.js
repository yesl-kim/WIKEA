import React from 'react';
import './ListPath.scss';

class ListPath extends React.Component {
  render() {
    return (
      <ol className="listPath">
        <li>
          <span>제품</span>
        </li>
        <li>
          <span>조명</span>
        </li>
        <li>
          <span>일반조명</span>
        </li>
        <li>
          <span>탁상스탠드</span>
        </li>
      </ol>
    );
  }
}

export default ListPath;
