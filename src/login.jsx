import axios from 'axios';
import { useState } from 'react';

export const Loing = () => {
  const [userInfo, setUserInfo] = useState({
    userID: '',
    userPassword: '',
  });

  console.log(userInfo);

  const handleSubmit = async () => {
    // REST API는 http요청의 규약을 지킨 서버요청을 말한다.
    // RESTfull API 요청이라는게 있는데 조금더 엄격하게 http요청을 지키는 API요청을 말해.
    await axios.post(`http://localhost:5000/login`, userInfo);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
    console.log(userInfo);
  };

  const handleClick = ()=>{
    axios.get("http://localhost:5000/click");
  }

  return (
    <>
      <div className={`flex flex-col`}>
        <div>
          <label>user ID:</label>
          <input
            name={`userID`}
            onChange={handleChangeInput}
            className={`ml-2 border-[1px] border-black`}
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
      </div>
      <button
        onClick={handleSubmit}
        className={`ml-24 mt-4 w-20 h-10 bg-blue-500 rounded-xl text-white font-bold hover:bg-gray-400`}
      >
        전송하기
      </button>
      <button onClick={handleClick}>클릭하세요</button>
    </>
  );
};
