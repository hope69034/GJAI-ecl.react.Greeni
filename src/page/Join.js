import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 

 




const Join = () => {
  console.log('react0 : join.js')
  const idRef = useRef();
  /* const pwRef = useRef(); */

 
const navigate=useNavigate()

  const handleJoin = (e) => {
    console.log(idRef);
    console.log(idRef.current);
    console.log(idRef.current.value);
    /* console.log(pwRef.current.value); */
    e.preventDefault(); //폼태그에의해 다른페이지로 나가지 못하도록 막는기능

    let userData = {
      id: idRef.current.value,
      /* pw: pwRef.current.value, */
    };
    axios.put("http://127.0.0.1:3001/joinData", {
        user: userData,
      })
      .then((res) => {
        console.log("react1 : 성공res : ",res);
        console.log("react2 : 성공res.data : ",res.data);
    
        //this.props.onReceive(res.data);




        //res.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))

        /* console.log("react2 : 성공res.data.result : ",res.data.result); */
        /* alert('라우터다녀오기성공') */
        /* navigate('/') //메인으로이동  */
    
      })
      .catch((err) => {
        console.log("react3 : 실패");
      });
    //axios 를 이요해서 데이터 서버로 보내기    {보낼주소 보낼데이터}
  };

  return (
    <div>
      <br></br>
      그리니의 심리 상담소입니다.
      {/* react는 싱글페이지라 폼사용하면 나가버린다 */}
      <form onSubmit={handleJoin}>
        <input
          name="id"
          ref={idRef}
          type="text"
          placeholder="그리니에게 상담 받으세요."
        ></input>

<input type="submit" value="말하기"></input>

      {/*   <input
          name="pw"
          ref={pwRef}
          type="text"
          placeholder="pw입력하시오"
        ></input> */}
        {/* <input type="submit" value="가입하기"></input> */}
      </form>

      <h1>Users</h1>
    </div>

    
  );
};

export default Join;
