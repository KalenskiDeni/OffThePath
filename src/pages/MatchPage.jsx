import React, { useEffect, useState } from "react";
import "/src/styles/match.css";

export default function MatchPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://offthepath-webapp-default-rtdb.firebaseio.com/locals.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(Object.values(result)); // Convert the object to an array
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleNext = (isAccepted) => {
        if (isAccepted) {
            console.log(`Accepted: ${data[currentIndex].name}`);
        } else {
            console.log(`Rejected: ${data[currentIndex].name}`);
        }
        
        setCurrentIndex(prevIndex => {
            if (prevIndex < data.length - 1) {
                return prevIndex + 1;
            }
            return prevIndex; // Stay on the last local if at the end
        });
    };

    return (
        <section className="page">
            <div className="container">
            
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {data.length > 0 && currentIndex < data.length ? (
                    <div className="local-card">
                        <div className="avatar-container">
                            <img src={data[currentIndex].avatar} alt={`${data[currentIndex].name}'s avatar`} className="avatar" />
                        </div>
                        <h3>{data[currentIndex].name}</h3>
                        <div className="info-row">
                            <div>Age: {data[currentIndex].age}</div>
                            <div>Location: {data[currentIndex].location}</div>
                            <div>Interests: {data[currentIndex].interests.join(', ')}</div>
                        </div>
                        <p>{data[currentIndex].about}</p>
                    </div>
                ) : (
                    <p>No more locals available.</p>
                )}
                
                <div className="button-container">
                    <button onClick={() => handleNext(false)}>No</button>
                    <button onClick={() => handleNext(true)}>Yes</button>
                </div>
            </div>
        </section>
    );
}
