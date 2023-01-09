import { useState, useEffect } from 'react';
// API
import API from '../../API';

const initState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useProductFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initState);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const isPersistedState = stateName => {
        const sessionState = sessionStorage.getItem(stateName);
        return sessionState && JSON.parse(sessionState);
    }

    const fetchProducts = async (page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const products = await API.fetchProducts(searchTerm, page);

            setState(prev => ({
                ...products,
                results:
                    page > 1 ? [...prev.results, ...products.results] : [products.results]
            }));

        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('marketplaceState');

            if (sessionState) {
                console.log('')
                setState(sessionState);
                return;
            }
        }
        console.log('Grabbing from API');
        setState(initState);
        fetchProducts(1, searchTerm);
    }, [searchTerm]);

    // Load More
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchProducts(state.page + 1, searchTerm);
        setIsLoadingMore(false);

    }, [isLoadingMore, searchTerm, state.page]);

    // Write to sessionStorage
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('marketplaceState', JSON.stringify(state));
    }, [searchTerm, state]);

    console.log(state);

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore }
}

