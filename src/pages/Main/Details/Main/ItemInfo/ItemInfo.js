import React, { Component } from 'react';
import PrimaryInfo from './PrimaryInfo.js';
import LikePopUp from '../../Modal/LikePopup/likePopUp';
import './ItemInfo.scss';

class ItemInfo extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  handleLike = e => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { isLiked } = this.state;
    const { product } = this.props;
    return (
      <>
        <div className="item-info sticky">
          <PrimaryInfo product={product} />
          <div className="item-btn-group">
            <button>구매하기</button>
            <button
              onClick={this.handleLike}
              className={`${isLiked ? 'liked' : ''}`}
            >
              <i className="ic-heart" aria-label="위시리스트에 추가" />
            </button>
          </div>
          <div className="item-availability">
            <div className="stock-check">
              <i className="ic-cart1" />
              <span>배송 여부는 결제 단계에서 확인하실 수 있습니다.</span>
            </div>
            <hr />
            <div className="stock-check">
              <i className="ic-store" />
              <a href="/">매장 재고 및 재입고 날짜 확인</a>
            </div>
          </div>
        </div>
        {isLiked ? (
          <LikePopUp isLiked={isLiked}>
            {<span>위시리스트에 담겼습니다.</span>}
          </LikePopUp>
        ) : (
          <LikePopUp isLiked={isLiked}>
            {<span>즐겨찾기 목록에서 삭제되었습니다.</span>}
          </LikePopUp>
        )}
      </>
    );
  }
}

export default ItemInfo;

// const LIKED = true;
// const DISLIKED = false;
