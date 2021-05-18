import React from 'react';
import './FilterModal.scss';

class FilterModal extends React.Component {
  constructor() {
    super();
    this.state = {
      sortbtn: false,
      pricebtn: false,
      colorbtn: false,
    };
  }

  handleBtn = e => {
    const btnsValue = e.currentTarget.name;

    this.setState({
      [btnsValue]: !this.state[btnsValue],
    });
  };

  render() {
    return (
      <ul className="filter_modal">
        {BTNS_TITLE.btnTitle.map((btns, index) => (
          <li className="filter_title" key={index}>
            <button
              type="button"
              className="filter_btn"
              onClick={this.handleBtn}
              name={btns.name}
            >
              <div className="filter_name">
                <span>{btns.title}</span>
              </div>
              <div>
                <i className="ic-caret" />
              </div>
            </button>
            {this.state[btns.name] && (
              <ul className="filter_box">
                <li className="filter_lists">
                  {btns.list.map((btnList, index) => (
                    <label className="radio_btn" key={index}>
                      <span>{btnList}</span>
                      <div className="radio">
                        <input type="radio" id="radio" name="radioName" />
                      </div>
                    </label>
                  ))}
                </li>
              </ul>
            )}
          </li>
        ))}
        {BTNS_TITLE.checkboxTitle.map((checkboxBtn, index) => (
          <li className="filter_title" key={index}>
            <label type="button" className="filter_btn">
              <div className="filter_name">
                <span>{checkboxBtn.title}</span>
              </div>
              <div>
                <input type="checkbox" />
              </div>
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default FilterModal;

const BTNS_TITLE = {
  btnTitle: [
    {
      name: 'sortbtn',
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
      name: 'pricebtn',
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
      name: 'colorbtn',
      title: '색깔',
      list: ['red', 'blue', 'green'],
    },
  ],
  checkboxTitle: [
    { title: '온라인 특가' },

    { title: '신상품' },

    { title: '특가' },
  ],
};
