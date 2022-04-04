import { Link } from "react-router-dom";
import styled from "styled-components";

const BoardContainer = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <>
      <BoardContainer>
        {[1, 2, 3, 4, 5].map((data) => (
          <Link
            style={{ padding: "30px 20px", borderBottom: "1px solid black" }}
            to={`${data}`}
            key={data}
          >
            게시글 {data}
          </Link>
        ))}
      </BoardContainer>
      <Link to="post">포스팅</Link>
    </>
  );
};
export default Home;
