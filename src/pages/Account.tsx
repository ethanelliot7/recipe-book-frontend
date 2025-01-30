
import { useEffect, useState } from "react";
import api from "@/services/api.ts";
import Loader from "@/components/Loader.tsx";
import {useParams} from "react-router";

function Account() {
    const { id } = useParams(); // Destructure id for better readability
    const [user, setUser] = useState(null); // Use null for initial state to differentiate loading states
    const [loading, setLoading] = useState(true); // Default to true since the data is being fetched immediately

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`api/user/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error); // Provide more context in the error log
            } finally {
                setLoading(false); // Ensure loading is set to false whether fetch succeeds or fails
            }
        };

        fetchUser();
    }, [id]); // Include id in the dependency array to avoid unnecessary re-renders

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return <div>User not found or an error occurred.</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Render additional user details as needed */}
        </div>
    );
}

export default Account;
