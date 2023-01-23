import { List } from '../styles/List.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesArray }) => {
    const location = useLocation();
    return (
        <List>
            {moviesArray.map(({ id, name, title }) => {
                return (
                    <li key={id}>
                        <Link state={{ from: location }} to={`/movies/${id}`}>
                            <h3>{name || title}</h3>
                        </Link>
                    </li>
                );
            })}
        </List>
    )
}

export default MoviesList;