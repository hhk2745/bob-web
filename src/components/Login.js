import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { setRefreshToken } from '../storage/Cookie';
import { SET_TOKEN } from '../store/Auth';
import {fetchCall} from "../api";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useForm 사용을 위한 선언
  const { register, setValue, formState: { errors }, handleSubmit } = useForm();

  // submit 이후 동작할 코드
  // 백으로 유저 정보 전달
  const onValid = async ({ userid, password }) => {
    // input 태그 값 비워주는 코드
    setValue("password", "");

    // 백으로부터 받은 응답
    const response = await fetchCall('/user/login', 'POST', { userid, password });

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.refreshToken);
      dispatch(SET_TOKEN(response.json.accessToken));

      return navigate("/");
    } else {
      console.log(response.json);
    }
  };

  return(
    <div>
      <button onClick={()=>{
        onValid({
          userid: 'fj2746@gmail.com', password:'1q2w3e4r'
        })
      }}>
        login
      </button>
      ...
    </div>
  );
}

export default Login;
