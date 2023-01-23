import { getMovieDetails } from "fetch";
import { useState, useEffect, Suspense, } from "react";
import { useLocation, useParams, Link, Route, Routes } from "react-router-dom";
import { ProgressBar } from 'react-loader-spinner';
import { toast } from "react-toastify";
import Cast from "../Cast/Cast"
import Reviews from '../Reviews/Reviews';
import {
    Movie,
    MovieInfo,
    MovieMoreInfo,
} from '../../components/styles/Movie.styled'; 

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieID } = useParams();
    const location = useLocation();

    useEffect(() => {
        if (!movieID) return;
        const fetchMovieDetails = async id => {
            try {
                setLoading(true);
                const receivedTrends = await getMovieDetails(id);
                setMovie(receivedTrends);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails(movieID);
    }, [movieID])

    useEffect(() => {
        if (error === null) {
            return;
        }
        toast.error(`Man, something wrong here😪`);
    }, [error])
    return (
        <Movie>
            <Link to={location?.state?.from ?? '/'}>⏮</Link>
            {loading && (
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor="#F4442E"
                    barColor="#51E5FF"
                />
            )}
            <MovieInfo>
                <div>
                    <h1>
                        {movie.title} ({movie?.release_date})
                    </h1>
                    <img
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                                : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png'
                        }
                        alt={movie.title}
                    />
                    <p>User Score: {movie?.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <ul>
                        {movie?.genres?.map(({ id, name }) => {
                            return <li key={id}>{name}</li>;
                        })}
                    </ul>
                </div>
            </MovieInfo>
            <MovieMoreInfo>
                <h2>More info</h2>
                <ul>
                    <li>
                        <Link state={{ from: location?.state?.from ?? '/' }} to="reviews">
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link state={{ from: location?.state?.from ?? '/' }} to="cast">
                            Cast
                        </Link>
                    </li>
                </ul>
                <Suspense
                    fallback={
                        <ProgressBar
                            height="80"
                            width="80"
                            ariaLabel="progress-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass="progress-bar-wrapper"
                            borderColor="#F4442E"
                            barColor="orange"
                        />}
                >
                    <Routes>
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="cast" element={<Cast />} />
                    </Routes>
                </Suspense>
            </MovieMoreInfo>
        </Movie>
    );
}

export default MovieDetails;