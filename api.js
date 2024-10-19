const API_URL = 'http://localhost:5000/api/students'; // Replace with your actual API URL

export const getStudentRankings = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};

export const addStudent = async (student) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
};
