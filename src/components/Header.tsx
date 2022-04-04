import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav``;

const Items = styled.ul`
  display: flex;
  width: 20%;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <>
      <Nav>
        <Link to="/">홈</Link>
        <Items>
          <Link to="login">로그인</Link>
          <Link to="join">회원가입</Link>
          <Link to="github">깃허브</Link>
          <Link to="library">도서관</Link>
        </Items>
      </Nav>
    </>
  );
};
export default Header;
