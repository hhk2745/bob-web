import * as React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {fetchApi} from "../api/sample";
import { useNavigate } from "react-router-dom";

const enum fieldName {
  email = 'email',
  password = 'password',
  passwordConfirm = 'passwordConfirm'
}
// obj interface
interface IFormField {
  [fieldName.email]: string;
  [fieldName.password]: string;
  [fieldName.passwordConfirm]: string;
}

const Signup = ()=>{
  const navigate = useNavigate();

  // 유효성 검증 조건
  const schema = yup.object().shape({
    [fieldName.email]: yup.string().email('이메일 형식이 아닙니다.'),
    [fieldName.password]: yup.string().min(8, '8자 이상').max(16, '16자 이하').required('Password is required'),
    [fieldName.passwordConfirm]: yup.string()
      .oneOf([yup.ref(fieldName.password), null], 'Passwords must match')
  })
  // useForm
  const {
    register,
    handleSubmit,
    formState :{errors},
    setValue,
    getValues,
    watch,
  } = useForm<IFormField>({
    resolver: yupResolver(schema),
    defaultValues: {
      [fieldName.email]: '',
      [fieldName.password]: '',
      [fieldName.passwordConfirm]: '',
    }
  })
  // handler
  const signup = ()=>{
    // alert('Success');
    const param = watch();
    fetchApi('/user', 'post', param).then(res=>{
      if(res.data.result < 1){
        alert('TODO 실패 핸들링');
        return;
      }
      alert('회원가입 완료~');
      navigate('/');
    }).catch(e=>{
      console.log(e)
    })
  }

  return <>
    <div>회원가입</div>
    <div>subText</div>

    <div className="">
      <form className="">

        <div className="">
          <label htmlFor="email" className="">이메일</label>
          <input id="email" type="email" placeholder='example@inflab.com' {...register(fieldName.email)} />
          {errors[fieldName.email] && errors[fieldName.email].message}
        </div>

        <div className="">
          <label htmlFor="password" className="">비밀번호</label>
          <input id="password" className="" type="password" placeholder="******" {...register(fieldName.password)}/>
          {errors[fieldName.password] && errors[fieldName.password].message}
        </div>

        <div className="">
          <label htmlFor="passwordConfirm" className="">비밀번호 확인</label>
          <input id="passwordConfirm" className="" type="password" placeholder="******" {...register(fieldName.passwordConfirm)}/>
          {errors[fieldName.passwordConfirm] && errors[fieldName.passwordConfirm].message}
        </div>

        <button className="" onClick={handleSubmit(signup)}>가입하기</button>
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
