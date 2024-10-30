import React, { useState } from "react";

function CoPlat() {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [submissions, setSubmissions] = useState([]);

  const handleCodeSubmit = () => {
    const newSubmission = {
      id: submissions.length + 1,
      code,
      language,
      result: "Success", // Simulate result
    };
    setSubmissions([...submissions, newSubmission]);
    setOutput("Output: Successful Execution"); // Simulate output
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    section: {
      marginBottom: "20px",
    },
    label: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "8px",
    },
    select: {
      padding: "8px",
      fontSize: "14px",
      marginBottom: "15px",
      width: "100%",
      maxWidth: "200px",
    },
    editor: {
      width: "100%",
      minHeight: "200px",
      padding: "15px",
      fontSize: "14px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      marginBottom: "15px",
      fontFamily: "monospace",
    },
    button: {
      padding: "10px 20px",
      fontSize: "14px",
      borderRadius: "4px",
      border: "none",
      color: "#fff",
      backgroundColor: "#007bff",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    output: {
      padding: "15px",
      backgroundColor: "#e9ecef",
      borderRadius: "8px",
      fontSize: "14px",
      marginBottom: "20px",
    },
    submissionList: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      backgroundColor: "#f9f9f9",
    },
    submissionItem: {
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Coding Platform</h1>

      {/* Language Selection */}
      <div style={styles.section}>
        <label style={styles.label}>Choose Language:</label>
        <select
          style={styles.select}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C++">C++</option>
          <option value="Ruby">Ruby</option>
        </select>
      </div>

      {/* Code Editor */}
      <div style={styles.section}>
        <label style={styles.label}>Code Editor:</label>
        <textarea
          style={styles.editor}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
      </div>

      {/* Test Cases */}
      <div style={styles.section}>
        <label style={styles.label}>Test Cases:</label>
        <div style={styles.output}>
          <p>Input: [1, 2, 3, 4]</p>
          <p>Expected Output: 10</p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        style={styles.button}
        onClick={handleCodeSubmit}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        Submit Code
      </button>

      {/* Output Section */}
      <div style={styles.section}>
        <label style={styles.label}>Output:</label>
        <div style={styles.output}>{output}</div>
      </div>

      {/* Submission History */}
      <div style={styles.section}>
        <h2 style={styles.label}>Submission History</h2>
        <div style={styles.submissionList}>
          {submissions.length === 0 ? (
            <p>No submissions yet.</p>
          ) : (
            submissions.map((submission) => (
              <div key={submission.id} style={styles.submissionItem}>
                <p>
                  <strong>Language:</strong> {submission.language}
                </p>
                <p>
                  <strong>Result:</strong> {submission.result}
                </p>
                <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
                  {submission.code}
                </pre>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default CoPlat;
  