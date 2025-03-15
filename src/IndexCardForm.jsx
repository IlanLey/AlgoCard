import { useState } from "react";

function IndexCardForm ({currentTerm, onSubmission}) {

    const [userGuess, setUserGuess] = useState("");
    const [feedback, setFeedback] = useState("");

    // Allows Typing in the Input Box (Changes Each Key Stroke)
    const handleChange = (e) => {
        setUserGuess(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Submitted:", userGuess);

        if (userGuess.toLowerCase() == currentTerm.type.toLowerCase()) {
            console.log("Correct!");
            setFeedback("Correct!");
            onSubmission(true);
        } else {
            console.log("Incorrect!");
            setFeedback("Incorrect, Try Again");
        }
        // Reset User Input After Submission
        setUserGuess("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    Guess the answer here: 
                    <input 
                        type="text"
                        placeholder="Place your answer here..."
                        value = {userGuess}
                        className="input-one"
                        
                        // Allow Typing in the Input Box
                        onChange={handleChange}                    
                    />
                    <input
                        type="submit"
                        value="Submit Guess"
                        className="input-two"
                    />
                </label>
            </form>
            <div className="feedback">
                {feedback}
            </div>
        </>
    )
}

export default IndexCardForm