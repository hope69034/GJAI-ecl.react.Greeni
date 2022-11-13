// es7 react~설치
// rafce 엔터 리액트 에로우펑션 컴포넌트
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      Navbar lane
      <Link to="./Join"><button>회원가입</button></Link>
      <Link to="./login"><button>로긴</button></Link>
      <Link to="./"><button>메인</button></Link>
    </div>
  );
};

export default Navbar;
