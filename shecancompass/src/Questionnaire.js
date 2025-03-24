import React, { useState } from 'react';

const Questionnaire = () => {
    const [answers, setAnswers] = useState({}); // State to store user answers

    // List of questions
    const questions = [
        { id: 1, text: 'Do you have private access to online banking?' },
        { id: 2, text: 'Do you have children?' },
        { id: 3, text: 'How strong is your support system?' },
        { id: 4, text: 'Are you and/or your dependents in immediate danger? ' },
        { id: 5, text: 'Which places do you feel unsafe? ' },
    ];

    // Handle input changes
    const handleChange = (id, value) => {
        setAnswers({ ...answers, [id]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Answers:', answers);
        alert('Thank you for submitting your answers!');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center' }}>Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                {questions.map((question) => (
                    <div key={question.id} style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            {question.text}
                        </label>
                        <input
                            type="text"
                            value={answers[question.id] || ''}
                            onChange={(e) => handleChange(question.id, e.target.value)}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '16px',
                            }}
                            placeholder="Type your answer here"
                            required
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#000000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '15px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Questionnaire;