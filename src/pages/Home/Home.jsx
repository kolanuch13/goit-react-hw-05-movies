import { getTrends } from "fetch";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { ProgressBar } from 'react-loader-spinner';
import MoviesList from "components/MoviesList/MoviesList";
import { Section } from "../../components/styles/Section.styled"

const Home = () => {
    const [trends, setTrends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchTrends = async () => {
            try {
                setLoading(true);
                const recivedTrends = await getTrends();
                setTrends(recivedTrends);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            }
        };
        fetchTrends();
    }, []);

    useEffect(() => {
        if (error === null) return;
        toast.error(`Man, something wrong here😪`)
    }, [error]);

    return (
        <Section>
            <h2>Trending today</h2>
            {loading && <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor="#F4442E"
                barColor="orange"
            />}
            <MoviesList moviesArray={trends} />
        </Section>
    );
}

export default Home;