import React, { useState } from "react";
import { Range } from "react-range";

export default function AgeRangeSlider({ minAge, maxAge, onRangeChange }) {
    const [values, setValues] = useState([minAge, maxAge]);

    const handleRangeChange = (values) => { // ativates when user changes the age range
        setValues(values);  // new age range values
        onRangeChange(values);
    };

    return (
        <div className="age-range-slider">
            <h3>Age: {values[0]} - {values[1]}+</h3>
            <Range
                step={1}
                min={18}
                max={100}
                values={values}
                onChange={handleRangeChange}
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
        </div>
    );
}
