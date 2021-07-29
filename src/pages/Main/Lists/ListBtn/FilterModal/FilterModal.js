import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    const { filterBtn } = this.props;
    // const { subCategory } = this.props.match.params.subCategory;

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
                    // <Link to={`/${subCategory}/?sort=${btnList.btnAPI}`}>
                    <label className="radio_btn" key={index}>
                      <span>{btnList.btnName}</span>
                      <div className="radio">
                        <input
                          type="radio"
                          id="radio"
                          name="radioname"
                          onChange={() => filterBtn(btnList.btnAPI)}
                        />
                      </div>
                    </label>
                    // </Link>
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
                <span>{checkboxBtn.btnName}</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  onChange={() => filterBtn(checkboxBtn.btnAPI)}
                />
              </div>
            </label>
          </li>
        ))}
      </ul>
    );
  }
}

export default withRouter(FilterModal);

const BTNS_TITLE = {
  btnTitle: [
    {
      name: 'sortbtn',
      title: '정렬',
      list: [
        { btnName: '베스트 매치', btnAPI: 'sort=BEST' },
        { btnName: '낮은 가격 순', btnAPI: 'sort=PRICE_LOW_TO_HIGH' },
        { btnName: '높은 가격 순', btnAPI: 'sort=PRICE_HIGH_TO_LOW' },
        { btnName: '최신', btnAPI: 'sort=NEWEST' },
        { btnName: '이름', btnAPI: 'sort=NAME_ASCENDING' },
      ],
    },
    {
      name: 'pricebtn',
      title: '가격',
      list: [
        { btnName: '₩ 10,000 - 29,999', btnAPI: 'price=10000-29999' },
        { btnName: '₩ 30,000 - 49,999', btnAPI: 'price=30000-49999' },
        { btnName: '₩ 50,000 - 69,999', btnAPI: 'price=50000-69999' },
        { btnName: '₩ 70,000 - 89,999', btnAPI: 'price=70000-89999' },
        { btnName: '₩ 90,000+', btnAPI: 'price=90000-9999999' },
      ],
    },
    {
      name: 'colorbtn',
      title: '색깔',
      list: [
        { btnName: 'White', btnAPI: 'color=1' },
        { btnName: 'Grey', btnAPI: 'color=2' },
        { btnName: 'Yello', btnAPI: 'color=3' },
        { btnName: 'Black', btnAPI: 'color=4' },
        { btnName: 'Beige', btnAPI: 'color=5' },
        { btnName: 'Red', btnAPI: 'color=6' },
        { btnName: 'Blue', btnAPI: 'color=7' },
        { btnName: 'Green', btnAPI: 'color=8' },
        { btnName: 'Brown', btnAPI: 'color=9' },
        { btnName: 'Orange', btnAPI: 'color=10' },
      ],
    },
  ],
  checkboxTitle: [
    { btnName: '온라인 구매 가능', btnAPI: 'is_online=True' },
    { btnName: '신상품', btnAPI: 'is_new=True' },
  ],
};
