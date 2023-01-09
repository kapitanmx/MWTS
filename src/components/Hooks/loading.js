import { useState, useEffect } from "react";

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.onload = () => {
            setLoading(true);
        }
        setLoading(false);
    }, []);
    
    return loading;
}

export default Loading;
