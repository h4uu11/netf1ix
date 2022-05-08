import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.scss";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import Tv from "./pages/Tv";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/:videoType/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
