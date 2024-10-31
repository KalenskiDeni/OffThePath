import React, { useEffect, useState } from "react";
import "/src/styles/match.css";

export default function MatchPage() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://offthepath-webapp-default-rtdb.firebaseio.com/locals.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(Object.values(result));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const applyFilter = () => {
            if (selectedGenders.length === 0) {
                setFilteredData(data);
            } else {
                setFilteredData(data.filter(local => selectedGenders.includes(local.gender)));
            }
            setCurrentIndex(0);
        };

        applyFilter();
    }, [selectedGenders, data]);

    const handleGenderChange = (gender) => {
        setSelectedGenders(prev =>
            prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
        );
    };

    const handleNext = (isAccepted) => {
        if (isAccepted) {
            console.log(`Accepted: ${filteredData[currentIndex].name}`);
        } else {
            console.log(`Rejected: ${filteredData[currentIndex].name}`);
        }
        
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <section className="page1">
            {filteredData.length > 0 && currentIndex < filteredData.length && (
                <div className="filter-section">
                    <button
                        className="filter-button"
                        onClick={() => setIsGenderDropdownOpen(prev => !prev)}
                    >
                        Gender
                    </button>
                    
                    {isGenderDropdownOpen && (
                        <div className="dropdown-options">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGenders.includes("female")}
                                    onChange={() => handleGenderChange("female")}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGenders.includes("male")}
                                    onChange={() => handleGenderChange("male")}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedGenders.includes("other")}
                                    onChange={() => handleGenderChange("other")}
                                />
                                Other
                            </label>
                        </div>
                    )}
                </div>
            )}

            <div className="container1">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                {filteredData.length > 0 && currentIndex < filteredData.length ? (
                    <div className="local-card">
                        <div className="avatar1-container">
                            <img src={filteredData[currentIndex].avatar} alt={`${filteredData[currentIndex].name}'s avatar`} className="avatar1" />
                        </div>
                        <h3>{filteredData[currentIndex].name}</h3>
                        <div className="info-row">
                            <div>Age: {filteredData[currentIndex].age}</div>
                            <div>Location: {filteredData[currentIndex].location}</div>
                            <div>Interests: {filteredData[currentIndex].interests.join(', ')}</div>
                        </div>
                        <p>{filteredData[currentIndex].about}</p>
                    </div>
                ) : (
                    <p>No more locals available.</p>
                )}
                
                {currentIndex < filteredData.length && (
                    <div className="button-container">
                        <button onClick={() => handleNext(false)}>No</button>
                        <button onClick={() => handleNext(true)}>Yes</button>
                    </div>
                )}
            </div>
        </section>
    );
}
