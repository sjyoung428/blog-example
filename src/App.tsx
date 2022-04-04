import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BoardList from "./Routes/BoardList";
import Book from "./Routes/Book";
import Github from "./Routes/Github";
import Home from "./Routes/Home";
import Join from "./Routes/Join";
import Library from "./Routes/Library";
import Login from "./Routes/Login";
import PostBoard from "./Routes/PostBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="join" element={<Join />} />
          <Route path="github" element={<Github />} />
          <Route path="library" element={<Library />} />
          <Route path="library/:id" element={<Book />} />
          <Route path="post" element={<PostBoard />} />
          <Route path=":id" element={<BoardList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
