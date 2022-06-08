import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Blogs from "./components/Blog/Blogs";
import Contact from "./components/Blog/Contact";
import Error from "./components/Blog/Error";
import Index from "./components/Blog/Index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:id" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
