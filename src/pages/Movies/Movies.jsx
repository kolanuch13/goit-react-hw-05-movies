import MoviesList from "components/MoviesList/MoviesList";
import { getMoviesByQuery } from "fetch";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import { Section } from "components/styles/Section.styled";
import { Form } from 'components/styles/Form.styled';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [params, setParams] = useSearchParams();
    const query = params.get('query');
    
    useEffect(() => {
        if (!query) return;

        const fetchMovies = async query => {
            try {
                setLoading(true);
                const receivedMovies = await getMoviesByQuery(query);
                setMovies(receivedMovies);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies(query);
    }, [query]);

    useEffect(() => {
        if (error) {
            toast.error(`Man, something wrong here😪`);
        }
        return;
    }, [error]);

    const handleSubmit = event => {
        event.preventDefault();
        setParams({ query: event.currentTarget.search.value });
        event.target.reset();
    }

    return (
        <Section>
            <Form onSubmit={handleSubmit}>
                <label>
                    <input name="search" type="text"/>
                    <button type="submit">
                        👌
                    </button>
                </label>
            </Form>
            {loading && (
                <ProgressBar
                    height="80"
                    width="80"
                    ariaLabel="progress-bar-loading"
                    wrapperStyle={{}}
                    wrapperClass="progress-bar-wrapper"
                    borderColor="#F4442E"
                    barColor="orange"
                />
            )}
            {movies.length
                ?<MoviesList moviesArray={movies} />
                : <p>There is no movies with that query</p>
            }
        </Section>
    );
}

export default Movies;