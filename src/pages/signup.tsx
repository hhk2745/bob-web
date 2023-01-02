const Signup = ()=>{
  return <>
    <div>회원가입</div>
    <div>subText</div>

    <div className="">
      <form className="">

        <div className="">
          <label htmlFor="email" className="">이메일</label>
          <input id="email" data-kv="email" type="email" className="" placeholder="example@inflab.com"/>
          <span className="form__error form__error--email form__error--hide"></span>
        </div>

        <div className="">
          <label htmlFor="password" className="">비밀번호</label>
          <div className="">
            <input className="" value="" data-kv="password" type="password" spellCheck="false" id="password" placeholder="******"/>
          </div>

          <p className="" style={{display:"none"}}>
            <span className="">영문/숫자/특수문자 2가지 이상 포함</span>
            <span className="">8자 이상 32자 이하 입력 (공백 제외)</span>
            <span className="">연속 3자 이상 동일한 문자/숫자 제외</span>
            <span className="">비밀번호에 사용할 수 없는 문자가 포함되어 있습니다.</span>
          </p>
        </div>

        <div className="">
          <label htmlFor="passwordConfirm" className="">비밀번호 확인</label>
          <div className="">
            <input className="" value="" data-kv="passwordConfirm" type="password" spellCheck="false" id="passwordConfirm" placeholder="******"/>
          </div>
          <span className=""></span>
        </div>

        <button className="">가입하기</button>
        <div className="" style={{display:"none"}}>
            <span className="">
              가입 시, 통합 계정으로 인프랩이 제공하는 서비스를 모두 이용하실 수 있습니다.
              <a className="" href="https://www.inflearn.com/policy">통합 계정</a> 및 서비스 이용약관 (
                <a className="" href="https://www.inflearn.com/policy/terms-of-service">인프런</a> /
                <a className="" href="https://www.rallit.com/terms-of-service">랠릿</a>
              ),
              <a className="" href="https://www.inflearn.com/policy/privacy">개인정보처리방침</a>에
              동의합니다.
            </span>
          <p className="">
            <label htmlFor="allow-marketing" className="">통합회원 할인 혜택 및 유용한 채용 소식을 받아볼래요.</label>
            <input id="allow-marketing" type="checkbox" data-kv="allowMarketing" />
          </p>
        </div>
      </form>
      <div className="" style={{display:"none"}}>
        <hr className="" />
          <span className="">간편 회원가입</span>
          <div className="">
            <button className="" data-provider="Kakao" data-link="">
            </button>
            <button className="" data-provider="Google" data-link="">
            </button>

          </div>
          <hr className="social__line social__line--mobile" />
      </div>
    </div>
  </>
}


export default Signup
