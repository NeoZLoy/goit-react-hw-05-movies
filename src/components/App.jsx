import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MoviesPage } from "../pages/MoviesPage"
import { MovieDetailsPage } from "../pages/MovieDetailsPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="movies" element={<MoviesPage />}></Route>
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
    
    );
};

