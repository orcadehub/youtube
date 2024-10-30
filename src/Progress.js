import React from "react";

function Progress() {
  const courses = [
    { name: "JavaScript Basics", progress: 80 },
    { name: "React Fundamentals", progress: 60 },
    { name: "Node.js and Express", progress: 45 },
    { name: "MongoDB Essentials", progress: 70 },
    { name: "Data Structures", progress: 35 },
  ];

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
    courseItem: {
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    courseName: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
    },
    progressContainer: {
      height: "20px",
      backgroundColor: "#e0e0e0",
      borderRadius: "10px",
      overflow: "hidden",
    },
    progressBar: (progress) => ({
      height: "100%",
      width: `${progress}%`,
      backgroundColor: "#4caf50",
      transition: "width 0.5s ease",
    }),
    progressText: {
      marginTop: "5px",
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Progress Tracking</h1>

      {courses.map((course, index) => (
        <div key={index} style={styles.courseItem}>
          <div style={styles.courseName}>{course.name}</div>
          <div style={styles.progressContainer}>
            <div style={styles.progressBar(course.progress)}></div>
          </div>
          <div style={styles.progressText}>{course.progress}% completed</div>
        </div>
      ))}
    </div>
  );
}

export default Progress;
