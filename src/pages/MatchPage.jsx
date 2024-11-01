import React, { useEffect, useState } from "react";
import { Range } from "react-range";
import "/src/styles/match.css";
import location from "../assets/icons/location.svg";
import age from "../assets/icons/birthday.svg";
import interests from "../assets/icons/interests.svg";
import matchYES from "../assets/icons/match-YES.svg";
import matchNO from "../assets/icons/match-NO.svg";

export default function MatchPage() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [ageRange, setAgeRange] = useState([18, 100]);
    const [filterAgeRange, setFilterAgeRange] = useState([18, 100]);
    const [activeFilter, setActiveFilter] = useState(null); // Track the active filter

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://offthepath-webapp-default-rtdb.firebaseio.com/locals.json"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
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
            let filtered = data;

            if (selectedGenders.length > 0) {
                filtered = filtered.filter(local => selectedGenders.includes(local.gender));
            }

            filtered = filtered.filter(local => local.age >= filterAgeRange[0] && local.age <= filterAgeRange[1]);

            setFilteredData(filtered);
            setCurrentIndex(0);
        };

        applyFilter();
    }, [selectedGenders, filterAgeRange, data]);

    const handleGenderChange = (gender) => {
        setSelectedGenders(prev =>
            prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]
        );
    };

    const handleApplyAgeFilter = () => {
        setFilterAgeRange(ageRange);
        setActiveFilter(null); // Close the age dropdown after applying the filter
    };

    const handleNext = (isAccepted) => {
        if (isAccepted) {
            console.log(`Accepted: ${filteredData[currentIndex].name}`);
        } else {
            console.log(`Rejected: ${filteredData[currentIndex].name}`);
        }

        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    const toggleGenderDropdown = () => {
        setActiveFilter(activeFilter === 'gender' ? null : 'gender');
    };

    const toggleAgeDropdown = () => {
        setActiveFilter(activeFilter === 'age' ? null : 'age');
    };

    // Check if no locals match the filters or if all locals have been viewed
    const noLocalsMatchFilter = filteredData.length === 0;
    const allLocalsViewed = !noLocalsMatchFilter && currentIndex >= filteredData.length;

    return (
        <section className="page1">
            {!allLocalsViewed && (
                <div className="filter-section">
                    {/* Gender Filter Dropdown */}
                    <button
                        className="filter-button"
                        onClick={toggleGenderDropdown}
                    >
                        Gender
                    </button>

                    {activeFilter === 'gender' && (
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

                    {/* Age Filter Dropdown */}
                    <button
                        className="filter-button"
                        onClick={toggleAgeDropdown}
                    >
                        Age
                    </button>

                    {activeFilter === 'age' && (
                        <div className="age-range-dropdown">
                            <h6>Age Range: {ageRange[0]} - {ageRange[1]}</h6>
                            <Range
                                step={1}
                                min={18}
                                max={100}
                                values={ageRange}
                                onChange={(values) => setAgeRange(values)}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "6px",
                                            width: "100%",
                                            backgroundColor: "#ddd",
                                            borderRadius: "4px",
                                            position: "relative"
                                        }}
                                    >
                                        {children}
                                    </div>
                                )}
                                renderThumb={({ props }) => (
                                    <div
                                        {...props}
                                        style={{
                                            ...props.style,
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#333",
                                            borderRadius: "50%"
                                        }}
                                    />
                                )}
                            />
                            <button onClick={handleApplyAgeFilter} className="apply-filter-button">
                                Apply Filter
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div className="container1">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}

                {!noLocalsMatchFilter && !allLocalsViewed ? (
                    <div className="local-card">
                        <div className="avatar1-container">
                            <img
                                src={filteredData[currentIndex].avatar}
                                alt={`${filteredData[currentIndex].name}'s avatar`}
                                className="avatar1"
                            />
                        </div>
                        <h3>{filteredData[currentIndex].name}</h3>
                        <div className="info-row">
                            <div>
                                <img src={age} alt="age" className="iconM" />{" "}
                                {filteredData[currentIndex].age}
                            </div>
                            <div>
                                <img src={location} alt="Location" className="iconM" />
                                {filteredData[currentIndex].location}
                            </div>
                            <div>
                                <img src={interests} alt="interests" className="iconM" />{" "}
                                {filteredData[currentIndex].interests.join(", ")}
                            </div>
                        </div>
                        <p>{filteredData[currentIndex].about}</p>
                    </div>
                ) : (
                    <p>
                        {noLocalsMatchFilter
                            ? "No locals available with the matching filter"
                            : "No more locals available"}
                    </p>
                )}

                {currentIndex < filteredData.length && (
                    <div className="button-container">
                        <button onClick={() => handleNext(false)}>
                            <img src={matchNO} alt="NO" className="iconM" />{" "}
                        </button>
                        <button onClick={() => handleNext(true)}>
                            <img src={matchYES} alt="YES" className="iconM" />{" "}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
