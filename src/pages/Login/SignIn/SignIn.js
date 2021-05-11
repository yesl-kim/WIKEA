import React from 'react';
import './SignIn.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isLoginButtonActive: false,
    };
  }

  handleIdPwInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  changeColorLoginBtn = () => {
    const { idValue, pwValue } = this.state;
    idValue.includes('@') && idValue.includes('.') && pwValue.length >= 8
      ? this.setState({ isLoginButtonActive: true })
      : this.setState({ isLoginButtonActive: false });
  };

  render() {
    return (
      <div className="SignIn">
        <aside className="signInAside">
          <header>
            <i className="ic-close" />
            <img
              className="wikeaLogo"
              alt="WIKEA Logo"
              src="/images/Login/SignIn/wikeaLogo.jpeg"
            />
          </header>
          <article>
            <p className="loginTitle">로그인</p>
            <p className="loginDescription">
              외워야 할 비밀번호가 많아 불편하셨죠?
            </p>
            <p className="howToLoginFirst">
              이제 일회용 코드를 이용하여 간편하게 로그인 하세요.
            </p>
            <p className="howToLoginSecond">
              * 이메일 또는 휴대폰 번호 최초 인증 후 사용 가능
            </p>
          </article>
          <footer>
            <span className="homepageAddress">IKEA.kr -</span>
            <span className="personalInfoPolicy">개인정보처리방침</span>
            <p className="copyrightNotice">
              © Inter IKEA Systems B.V. 1999-2021
            </p>
          </footer>
        </aside>
        <div className="signInMain">
          <form>
            <div className="idInputContainer">
              <div className="idInputWrapper">
                <input
                  id="loginId"
                  type="text"
                  name="idValue"
                  onChange={this.handleIdPwInput}
                  onKeyUp={this.changeColorLoginBtn}
                />
                <label for="loginId">이메일 또는 휴대폰 번호</label>
              </div>
              <span className="anotherLoginOption">다른 로그인 옵션: </span>
              <span className="oneTimeCodeForLogin">일회용 코드로 로그인</span>
            </div>
            <div className="pwInputContainer">
              <div className="pwInputWrapper">
                <input
                  id="loginPassword"
                  type="password"
                  name="pwValue"
                  onChange={this.handleIdPwInput}
                  onKeyUp={this.changeColorLoginBtn}
                />
                <label for="loginPassword">비밀번호</label>
                <i className="ic-lock" />
              </div>
              <span className="findingPassword">비밀번호 찾기</span>
            </div>
            <section className="loginBtnWrapper">
              <button
                type="button"
                className={
                  this.state.isLoginButtonActive ? 'activated' : 'deactivated'
                }
              >
                로그인
              </button>
            </section>
            <button className="signUpBtn" type="button">
              회원가입
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
