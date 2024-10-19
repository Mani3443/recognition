import React, { useEffect, useState } from 'react';
import { getStudentRankings } from '../services/api';

const StudentDashboard = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        const fetchRankings = async () => {
            const data = await getStudentRankings();
            setRankings(data);
        };
        fetchRankings();
    }, []);

    return (
        <div>
            <h1>Student Rankings</h1>
            <ul>
                {rankings.map((student, index) => (
                    <li key={student.id}>
                        {index + 1}. {student.name} - Score: {student.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;