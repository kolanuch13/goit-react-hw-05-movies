import { List } from '../styles/List.styled';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MoviesList.protoTypes = {
    moviesArray: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MoviesList;