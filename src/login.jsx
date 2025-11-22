import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Loing = () => {
  // 리액트에서 페이지를 이동하기 위해 사용하는 함수
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userID: '',
    userPassword: '',
  });

  console.log(userInfo);

  const handleSubmit = async () => {
    // REST API는 http요청의 규약을 지킨 서버요청을 말한다.
    // RESTfull API 요청이라는게 있는데 조금더 엄격하게 http요청을 지키는 API요청을 말해.
    const result = await axios.post(
      `http://localhost:5000/api/login`,
      userInfo
    );

    // 예외처리
    console.log(result.data);
    if (result.data.id_check === false) {
      alert(result.data.msg);
    } else if (result.data.pw_check === false) {
      alert(result.data.msg);
    } else {
      // 에외처리를 통과하면 홈으로 이동

      // react 방식
      localStorage.setItem('token', result.data.token);
      navigate('/home');

      // // 기존방식
      // window.location.href = '/home';
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    console.log(userInfo);
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-[100vw] h-[100vh]`}
      >
        <div>
          <label>user ID:</label>
          <input
            name={`userID`}
            onChange={handleChangeInput}
            className={`ml-16 border-[1px] border-black`}
            type={`text`}
            placeholder={`아이디 입력`}
          ></input>
        </div>
        <div>
          <label>user Password:</label>
          <input
            name={`userPassword`}
            onChange={handleChangeInput}
            className={`ml-2 border-[1px] border-black`}
            type={`password`}
            placeholder={`비밀번호 입력`}
          ></input>
        </div>
        <button
          onClick={handleSubmit}
          className={`ml-24 mt-4 w-20 h-10 bg-blue-500 rounded-xl text-white font-bold hover:bg-gray-400`}
        >
          로그인
        </button>
      </div>
    </>
  );
};
