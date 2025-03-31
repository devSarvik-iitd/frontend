import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/user/dashboard", { withCredentials: true });
                setData(response.data);
            } catch (error) {
                setError(error);
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);  // ✅ Empty array ensures it runs only once

    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>Loading...</p>;

    return <div>Welcome, {data.user.username}</div>;
};

export default Dashboard;
