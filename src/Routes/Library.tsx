import { Link } from "react-router-dom";
import styled from "styled-components";

const BookList = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

const Library = () => {
  return (
    <>
      <BookList>
        {["책1", "책2", "책3", "책4"].map((data) => (
          <Link
            style={{ padding: "30px 20px", borderBottom: "1px solid black" }}
            to={data}
            key={data}
          >
            {data}
          </Link>
        ))}
      </BookList>
    </>
  );
};
export default Library;
