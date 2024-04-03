import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Calculator = ({ numberId }) => {
    const [windowPrevState, setWindowPrevState] = useState([]);
    const [windowCurrState, setWindowCurrState] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [average, setAverage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://20.244.56.144/test/${numberId}`);
                const fetchedNumbers = response.data.numbers || [];

                // Update windowPrevState and windowCurrState
                setWindowPrevState([...windowCurrState]);
                setWindowCurrState(prevState => [...prevState, ...fetchedNumbers].slice(-10));

                // Update numbers
                setNumbers([...fetchedNumbers]);

                // Calculate average
                const sum = fetchedNumbers.reduce((acc, num) => acc + num, 0);
                const avg = fetchedNumbers.length > 0 ? sum / fetchedNumbers.length : null;
                setAverage(avg);
            } catch (error) {
                console.error('Error fetching numbers:', error.message);
            }
        };

        fetchData();
    }, [numberId]);

    return (
        <div>
            <pre>{"{"}</pre>
            <pre>{"  \"windowPrevState\": " + JSON.stringify(windowPrevState) + ","}</pre>
            <pre>{"  \"windowCurrState\": " + JSON.stringify(windowCurrState) + ","}</pre>
            <pre>{"  \"numbers\": " + JSON.stringify(numbers) + ","}</pre>
            <pre>{"  \"avg\": " + average}</pre>
            <pre>{"}"}</pre>
        </div>
    );
};

export default Calculator;
