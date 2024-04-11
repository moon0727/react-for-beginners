import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Genres from "./routes/Genres";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path=":g" element={<Genres />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
