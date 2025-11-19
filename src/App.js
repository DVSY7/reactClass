import './App.css';
import {useEffect,useState} from "react";

function App() {

  const [name, setName] = useState("Tom");
  const [age, setAge] = useState(20);
  const [clicked, setClicked] = useState(false);
  const [users, setUsers] = useState({name: "", age: "", email: ""});
  const [visible, setVisible] = useState("hidden");
 
  useEffect(()=>{
    // 사용자가 로그인을했어 근데 토큰가져와되잖아 그 동작을 이 컴포넌트가 나타날때 한번만 실행시켜주는거야
    console.log("컴포넌트가 처음 마운트됌!");
  },[]);

   useEffect(()=>{
    // clicked 변수가 어떤 동작에 의해서 상태가 변할떄마다 실행시켜주는거야
    console.log("상태관리 변수가 변경됌!");
  },[name,age]);

  useEffect(()=>{
    // clicked,age,name 변수가 어떤 동작에 의해서 상태가 변할떄마다 실행시켜주는거야
    if(clicked){
      setUsers({name: "Tom", age: 20, email: "gbytkdduf1004@naver.com"});
      console.log("정보를 가져옵니다.");
    }else if(!clicked){
      setUsers({name: "", age : "", email : ""});
      console.log("정보를 삭제합니다.");
    }
  },[clicked]);

  // age,name <- 변수가 맞는데 문제는 리액트는 상태관리 기반의 컴포넌트를 설계해주는 라이브러리야
  // 그래서 일반변수를 사용하게 되면 UI에 바로 반영되지 못하고 새로고침을 할때만 업데이트된 내용이 반영되는데
  // 문제는 새로고침을 해버리면 컴포넌트가 새로 마운트 ( 다시 랜더링 되면서) 변수도 다 초기화가 되버려서 결과적으로는 아무런 변화가 없어
  
  // 랜더링하고 새로고침은 다른개념이야
  // 랜더링은 컴포넌트를 마운트 언마운트 시키는게 아니라 컴포넌트가 마운트 되어있는 상태에서 최신 내용을 다시 코드를 위에서부터 읽어서 반영해주는거야
  // 근데 새로고침은 컴포넌트가 언마운트 됐다가 다시 마운트가 되버려서 컴포넌트 실행자체를 처음부터 새로하는거야

  // display: none 이거는 UI자체를 dom요소에서 아예 제외시켜버리는거야 그게 언마운트랑 같은개념이야
  // dispaly: block,flex,inline 요소가 dom에 추가돼 요소가 dom에 추가되면 그게 마운트랑 같은 개념이야
  // innerHTML <- 비동기 처리랑 유사하는거 알아?

  const handleChange = ()=>{
    setName("Alice")
    setAge(40);
  }


  return (
    <>
      <div onMouseOver={()=>{setVisible(`visible`)}} onMouseLeave={()=>{setVisible("hidden")}} onClick={()=>{handleChange(); setClicked((prev) => (!prev))}} className={"w-20 h-20 bg-gray-200 cursor-pointer"}>{`이름:${name} \n나이:${age}`}</div>
        <>
          <div className={`${visible} transition-all duration-200`}>사용자이름 : {users.name}</div>
          <div className={`${visible} transition-all duration-200`}>사용자나이 : {users.age}</div>
          <div className={`${visible} transition-all duration-200`}>사용자이메일 : {users.email} <div>안녕</div> </div>
        </>
    </>
  );
}

export default App;

