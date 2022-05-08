import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubVisual from "../components/SubVisual";
import { movieAction } from "../redux/actions/movieAction";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import YouTube from "react-youtube";
import YoutubeModal from "../components/YoutubeModal";

const Home = () => {
  const dispatch = useDispatch();
  const {
    upcomingMovies,
    popularMovies,
    topRatedMovies,
    onTheAirTvs,
    topRatedTvs,
    popularTvs,
    videoYoutube,
  } = useSelector((state) => state.movieReducer);

  const navigate = useNavigate();

  const goLink = (videoType, id) => {
    navigate(`/${videoType}/${id}`);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    dispatch(movieAction.videoYoutube("movie", upcomingMovies[0].id));
    setOpen(true);
  };

  useEffect(() => {
    dispatch(movieAction.movieAll());
    dispatch(movieAction.tvAll());
  }, [dispatch]);

  return (
    // 이미지
    /* https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/1uegR4uAxRxiMyX4nQnpzbXhrTw.jpg */
    /* https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h9fjtMeoaI3LrW8avMZoJPoniLZ.jpg */
    <>
      <div
        className="mainVisual"
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${
            upcomingMovies[0] && upcomingMovies[0].backdrop_path
          })`,
        }}
      >
        <div className="inner">
          <div className="title">
            {upcomingMovies[0] && upcomingMovies[0].title}
          </div>
          <div className="overview">
            {upcomingMovies[0] && upcomingMovies[0].overview}
          </div>
          <div className="btnWrap">
            <button onClick={handleOpen}>
              <PlayArrowIcon /> Trailer
            </button>
            <button onClick={() => goLink("movie", upcomingMovies[0].id)}>
              <InfoIcon /> More Info
            </button>
          </div>
        </div>
      </div>
      <div className="subVisual">
        <div className="item">
          <div className="title">Popular Movies</div>
          <SubVisual content={popularMovies} videoType="movie" />
        </div>
        <div className="item">
          <div className="title">Currently Airing TV Shows</div>
          <SubVisual content={onTheAirTvs} videoType="tv" />
        </div>
        <div className="item">
          <div className="title">Upcoming Movies</div>
          <SubVisual content={upcomingMovies} videoType="movie" />
        </div>
        <div className="item">
          <div className="title">Popular TV Shows</div>
          <SubVisual content={popularTvs} videoType="tv" />
        </div>
        <div className="item">
          <div className="title">Top Rated TV Shows</div>
          <SubVisual content={topRatedTvs} videoType="tv" />
        </div>
        <div className="item">
          <div className="title">Top Rated Movies</div>
          <SubVisual content={topRatedMovies} videoType="movie" />
        </div>
      </div>
      <YoutubeModal setOpen={setOpen} open={open} videoYoutube={videoYoutube} />
    </>
  );
};

export default Home;
