import React, { useState } from 'react';
import { addStudent } from '../services/api';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addStudent({ name, score });
        setName('');
        setScore('');
        // Add a mechanism to refresh the rankings or notify the user
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add/Edit Student</h2>
            <input
                type="text"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;
