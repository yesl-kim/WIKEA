import React from 'react';
import './SortModal.scss';

class SortModal extends React.Component {
  constructor() {
    super();
    this.state = {
      btnTitle: [
        {
          name: 'sort',
          title: '정렬',
          list: [
            '베스트 매치',
            '낮은 가격 순',
            '높은 가격 순',
            '최신',
            '고객 평가',
            '이름',
            '가장 인기있는',
            '폭',
            '신장',
          ],
        },
        {
          name: 'price',
          title: '가격',
          list: [
            '₩ 0 - 9,999',
            '₩ 10,000 - 19,999',
            '₩ 20,000 - 29,999',
            '₩ 30,000 - 39,999',
            '₩ 40,000+',
          ],
        },
        {
          name: 'color',
          title: '색깔',
          list: ['red', 'blue', 'green'],
        },
      ],
      sortList: false,
      priceList: false,
      colorList: false,
    };
  }

  handleLists = e => {
    const { sortList, colorList, priceList } = this.state;

    this.setState({
      sortList: !sortList,
    });
  };

  render() {
    const { sortList, btnTitle } = this.state;

    return (
      <ul className="sort_modal">
        {btnTitle.map(btns => (
          <li className="sort_title">
            <button
              type="button"
              className="sort_btn"
              onClick={this.handleLists}
              value="hello"
            >
              <div className="sort_name">
                <span>{btns.title}</span>
                <span>베스트 매치</span>
              </div>
              <div>
                <i className="ic-caret" />
              </div>
            </button>
            <ul className={`sort_box ${!sortList ? 'visually-hidden' : ''}`}>
              <li className="sort_lists">
                {btns.list.map(btnList => (
                  <label className="radio_btn">
                    <span>{btnList}</span>
                    <div className="radio">
                      <input type="radio" id="radio" name="radioname" />
                    </div>
                  </label>
                ))}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default SortModal;
