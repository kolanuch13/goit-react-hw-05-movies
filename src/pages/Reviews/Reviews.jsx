import { getReviews } from "fetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner';
import { ReviewStyle } from '../../components/styles/Review.styled';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieID } = useParams();

    useEffect(() => {
        const fetchReviews = async id => {
            try {
                setLoading(true);
                const receivedReview = await getReviews(id);
                setReviews(receivedReview);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchReviews(movieID);
    }, [movieID]);
    
    useEffect(() => {
        if (error) {
            toast.error(`Man, something wrong here😪`);
        }
        return;
    }, [error])

    return (
        <ReviewStyle>
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
                {reviews.map(({ id, author, content }) => {
                    return (
                        <li key={id}>
                            <h3>Author: {author}</h3>
                            <p>{content}</p>
                        </li>
                    );
                })}
            </ul>
        </ReviewStyle>
    );
}

export default Reviews;