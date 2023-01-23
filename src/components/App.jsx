import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home/Home"
import Movies from "../pages/Movies/Movies"
import MovieDetails from "pages/MovieDetail/MovieDetail";
import { Header } from "./styles/Header.styled";

export const App = () => {

  return (
      <div>
          <Header >
              <p>Logo</p>
              <nav >
                  <NavLink className="link" to="/" end>
                      Home
                  </NavLink>
                  <NavLink className="link" to="/movies">
                      Movies
                  </NavLink>
              </nav>
          </Header>

          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/movies/:movieID/*" element={<MovieDetails />} />
              </Routes>
          </div>
      </div>
  );
};
