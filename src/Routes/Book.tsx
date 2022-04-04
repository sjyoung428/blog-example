import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  return (
    <>
      <h1>{id}</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>대여하기</span>
        <span>대여중</span>
        <span>반납하기</span>
      </div>
    </>
  );
};
export default Book;
