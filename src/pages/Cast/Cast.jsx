import { getCast } from "fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ProgressBar } from 'react-loader-spinner';
import { CastStyle } from "../../components/styles/Cast.styled"

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieID } = useParams();
    
    useEffect(() => {
        const fetchCast = async id => {
            try {
                setLoading(true);
                const receivedCast = await getCast(id);
                setMovieCast(receivedCast);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCast(movieID);
    }, [movieID]);

    useEffect(() => {
        if (error) {
            toast.error(`Man, something wrong here😪`);
        } 
        return;
    }, [error])
    
    return (
        <CastStyle>
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
            <ul>
                {movieCast.map(({ id, name, profile_path, character }) => {
                    return (
                        <li key={id}>
                            <img
                                src={
                                    profile_path
                                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                                        : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-200.png'
                                }
                                alt={name}
                            />
                            <h3>{name}</h3>
                            <p>Character: {character}</p>
                        </li>
                    );
                })}
            </ul>
        </CastStyle>
    );
};

export default Cast;
