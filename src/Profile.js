import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function Profile() {
  const userData = {
    profilePicture: "https://via.placeholder.com/100", // Replace with actual image URL
    name: "John Doe",
    userId: "JD12345",
    courseCompletion: 75,
    questionsSolved: 120,
    codingStreak: 15,
    certificatesEarned: 3,
    enrolledCourses: ["Full Stack Development", "Data Structures", "Python for Beginners"],
  };

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      marginBottom: "20px",
    },
    profilePic: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
    },
    userInfo: {
      fontSize: "18px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
    },
    progressSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
      marginBottom: "40px",
    },
    progressContainer: {
      width: "100%",
      backgroundColor: "#e0e0e0",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "10px",
    },
    progressBar: (progress) => ({
      height: "20px",
      width: `${progress}%`,
      backgroundColor: "#4caf50",
      transition: "width 0.5s ease",
    }),
    chartContainer: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "40px",
      gap: "20px",
      flexWrap: "wrap",
    },
    chartBox: {
      width: "45%",
      minWidth: "300px",
      backgroundColor: "#f9f9f9",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Questions Solved",
        data: [10, 20, 40, 60, userData.questionsSolved],
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"],
    datasets: [
      {
        label: "Skills Mastery (%)",
        data: [85, 75, 90, 65, 50, 80],
        backgroundColor: [
          "#f44336",
          "#2196f3",
          "#ffeb3b",
          "#4caf50",
          "#9c27b0",
          "#ff9800",
        ],
      },
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile Dashboard</h1>

      {/* User Info Section */}
      <div style={styles.header}>
        <img src={userData.profilePicture} alt="Profile" style={styles.profilePic} />
        <div style={styles.userInfo}>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>User ID:</strong> {userData.userId}</p>
          <p><strong>Enrolled Courses:</strong> {userData.enrolledCourses.join(", ")}</p>
        </div>
      </div>

      {/* Progress Section */}
      <div style={styles.progressSection}>
        <div>
          <h3>Course Completion</h3>
          <div style={styles.progressContainer}>
            <div style={styles.progressBar(userData.courseCompletion)}></div>
          </div>
          <p>{userData.courseCompletion}% completed</p>
        </div>

        <div>
          <h3>Questions Solved</h3>
          <p>{userData.questionsSolved}</p>
        </div>

        <div>
          <h3>Coding Streak</h3>
          <p>{userData.codingStreak} days</p>
        </div>

        <div>
          <h3>Certificates Earned</h3>
          <p>{userData.certificatesEarned}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div style={styles.chartContainer}>
        <div style={styles.chartBox}>
          <h3>Questions Solved Over Time</h3>
          <Line data={lineData} />
        </div>

        <div style={styles.chartBox}>
          <h3>Skills Mastery</h3>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
