import React from 'react';
import { withRouter } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      lastNameValue: '',
      firstNameValue: '',
      birthDayDateValue: '',
      cellPhoneNumberValue: '',
      idValue: '',
      pwValue: '',
      type: 'password',
    };
  }

  handleInputValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  goToSignIn = () => {
    this.props.history.push('/signin');
  };

  render() {
    const {
      lastNameValue,
      firstNameValue,
      birthDayDateValue,
      cellPhoneNumberValue,
      idValue,
      pwValue,
      type,
    } = this.state;

    return (
      <div className="sign_up">
        <aside className="sign_up_aside">
          <section className="sign_up_title_container">
            <p className="sign_up_title">회원가입</p>
            <div>
              <span className="comment_with_sign_up_already">
                이미 가입하셨나요?
              </span>
              <span className="go_to_login_page" onClick={this.goToSignIn}>
                로그인 하기
              </span>
            </div>
          </section>

          <div className="sign_up_aside_images_container">
            <section className="sign_up_aside_images_first_column">
              <img
                className="colleagues_sitting_around"
                alt="colleagues sitting around"
                src="/images/Login/SignUp/colleagues sitting around.jpeg"
              />
              <img
                className="desk_and_monitor"
                alt="desk and monitor"
                src="/images/Login/SignUp/desk and monitor.jpeg"
              />
              <img
                className="indoor_living_room"
                alt="indoor living room"
                src="/images/Login/SignUp/indoor living room.jpeg"
              />
              <img
                className="headphone_in_yellow_background"
                alt="headphone in yellow background"
                src="/images/Login/SignUp/headphone in yellow background.jpeg"
              />
            </section>

            <section className="sign_up_aside_images_second_column">
              <img
                className="light_bulb_in_yellow_background"
                alt="light bulb in yellow background"
                src="/images/Login/SignUp/light bulb in yellow background.jpeg"
              />
              <img
                className="indoor_office"
                alt="indoor office"
                src="/images/Login/SignUp/indoor office.jpeg"
              />
              <img
                className="rubix_cube_in_yellow_background"
                alt="rubix cube in yellow background"
                src="/images/Login/SignUp/rubix cube in yellow background.jpeg"
              />
              <img
                className="mom_and_child"
                alt="mom and child"
                src="/images/Login/SignUp/mom and child.jpeg"
              />
              <img
                className="woman_with_sofa"
                alt="woman with sofa."
                src="/images/Login/SignUp/woman with sofa..jpeg"
              />
            </section>
          </div>
        </aside>

        <div className="sign_up_main">
          <section className="want_you_sign_up_wikea_family_container">
            <p className="want_you_sign_up_wikea_family">
              WIKEA Family에 가입하시겠어요?
            </p>
            <div className="sign_up_wikea_family_with_yes">
              <div className="checkbox_and_yes_comment_wrapper">
                <input
                  className="sign_up_wikea_family_with_yes_checkbox"
                  type="checkbox"
                />
                <span className="check_with_yes_answer">
                  예, IKEA Family의 다양한 혜택 및 할인을 즐기고 싶습니다!
                </span>
                <span className="wikea_family_benefit">WIKEA Family 혜택</span>
              </div>
            </div>
            <div className="just_sign_up_online_mall">
              <div className="checkbox_and_no_comment_wrapper">
                <input
                  className="sign_up_wikea_family_with_no_checkbox"
                  type="checkbox"
                />
                <span className="check_with_no_answer">
                  아니요, 추가 혜택 없이 온라인 몰만 가입하고 싶습니다.
                </span>
                <span className="wikea_online_mall_benefit">
                  WIKEA 온라인몰 혜택
                </span>
              </div>
            </div>
          </section>

          <form>
            <div className="last_name_input_container">
              <div className="last_name_input_wrapper">
                <input
                  id="lastNameValue"
                  type="text"
                  name="lastNameValue"
                  onChange={this.handleInputValue}
                />
                <label
                  htmlFor="lastNameValue"
                  className={lastNameValue && 'typing'}
                >
                  성
                </label>
                <p
                  className={
                    lastNameValue
                      ? 'lastName_invalid_comment'
                      : 'no_display_comment'
                  }
                >
                  성 필드는 필수 필드입니다.
                </p>
              </div>
            </div>

            <div className="first_name_input_container">
              <div className="first_name_input_wrapper">
                <input
                  id="firstNameValue"
                  type="text"
                  name="firstNameValue"
                  onChange={this.handleInputValue}
                />
                <label
                  htmlFor="firstNameValue"
                  className={firstNameValue && 'typing'}
                >
                  이름
                </label>
                <p
                  className={
                    firstNameValue
                      ? 'firstName_invalid_comment'
                      : 'no_display_comment'
                  }
                >
                  이름 필드는 필수 필드입니다.
                </p>
              </div>
            </div>

            <div className="birth_day_date_input_container">
              <div className="birth_day_date_input_wrapper">
                <input
                  id="birthDayDateValue"
                  type="text"
                  // placeholder="YYYY-MM-DD"
                  name="birthDayDateValue"
                  onChange={this.handleInputValue}
                />
                <label
                  htmlFor="birthDayDateValue"
                  className={birthDayDateValue && 'typing'}
                >
                  생일
                </label>
                <p
                  className={
                    birthDayDateValue
                      ? 'birthDayDate_invalid_comment'
                      : 'no_display_comment'
                  }
                >
                  생일은 YYYY-MM-DD 형식이어야 합니다.
                </p>
              </div>
            </div>

            <div className="cell_phone_number_input_container">
              <div className="cell_phone_number_input_wrapper">
                <input
                  id="cellPhoneNumberValue"
                  type="tel"
                  name="cellPhoneNumberValue"
                  onChange={this.handleInputValue}
                />
                <label
                  htmlFor="cellPhoneNumberValue"
                  className={cellPhoneNumberValue && 'typing'}
                >
                  휴대폰
                </label>
                <span>KR (+82)</span>
                <p
                  className={
                    cellPhoneNumberValue
                      ? 'cellPhoneNumber_invalid_comment'
                      : 'no_display_comment'
                  }
                >
                  휴대폰 필드는 필수 필드입니다.
                </p>
              </div>
            </div>

            <div className="id_input_container">
              <div className="id_input_wrapper">
                <input
                  id="idValue"
                  type="text"
                  name="idValue"
                  onChange={this.handleInputValue}
                />
                <label htmlFor="idValue" className={idValue && 'typing'}>
                  이메일
                </label>
                <p
                  className={
                    idValue ? 'id_invalid_comment' : 'no_display_comment'
                  }
                >
                  필드는 100자 이하여야 하며, @ 기호 전까지 64자 이하여야
                  합니다. 마침표를 연속해서 입력할 수 없습니다.
                </p>
              </div>
            </div>

            <div className="pw_input_container">
              <div className="pw_input_wrapper">
                <input
                  id="pwValue"
                  type={type}
                  name="pwValue"
                  onChange={this.handleInputValue}
                />
                <label htmlFor="pwValue" className={pwValue && 'typing'}>
                  비밀번호
                </label>
                <i
                  className={`ic-lock ${pwValue ? '_show' : '_hide'}`}
                  // onClick={this.showPassword}
                />
                <p
                  className={
                    pwValue ? 'pw_invalid_comment' : 'no_display_comment'
                  }
                >
                  비밀번호는 최소 8자 이상을 입력해야 합니다.
                </p>
              </div>
            </div>

            <div className="marketing_acceptance_container">
              <input
                className="marketing_acceptance_checkbox"
                type="checkbox"
              />
              <span className="marketing_acceptance_comment">
                마케팅 수신 동의를 통해 WIKEA의 홈퍼니싱 아이디어와 신상품 소식,
                그리고 할인 혜택 정보를 받고 싶어요!
              </span>
            </div>

            <div className="terms_and_conditions_acceptance_container">
              <input
                className="terms_and_conditions_acceptance_checkbox"
                type="checkbox"
              />
              <span className="terms_and_conditions_acceptance_comment">
                (필수) 약관을 모두 읽고 동의합니다.
              </span>
              <span className="terms_and_conditions_details">이용약관</span>
            </div>

            <div className="personal_info_handling_policy_container">
              <input
                className="personal_info_handling_policy_checkbox"
                type="checkbox"
              />
              <span className="personal_info_handling_policy_comment">
                본인은 개인정보취급방침을 모두 읽고 이해하였습니다.
              </span>
              <span className="personal_info_handling_policy_details">
                개인정보 수집ㆍ이용 동의
              </span>
            </div>

            <div className="personal_info_processing_policy_container">
              <input
                class="personal_info_processing_policy_checkbox"
                type="checkbox"
              />
              <span className="personal_info_processing_policy_comment">
                (필수) 개인정보 처리 위탁에 동의합니다.
              </span>
              <span className="personal_info_processing_policy_details">
                개인정보 처리 위탁
              </span>
            </div>

            <div className="personal_info_transferring_policy_container">
              <input
                className="personal_info_transferring_policy_checkbox"
                type="checkbox"
              />
              <span className="personal_info_transferring_policy_comment">
                (필수) 개인정보 국외이전에 동의합니다.
              </span>
              <span className="personal_info_transferring_policy_details">
                개인정보 국외이전
              </span>
            </div>
            <button className="do_sign_up_btn" type="button">
              가입하기
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
