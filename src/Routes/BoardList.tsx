import { useParams } from "react-router-dom";

const BoardList = () => {
  const { id } = useParams();
  return (
    <>
      <div style={{ padding: "0px 50px" }}>
        <h1>게시글 {id} </h1>
        <p style={{ borderBottom: "1px solid black" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>댓글기능</div>
      </div>
    </>
  );
};
export default BoardList;
