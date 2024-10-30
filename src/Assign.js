import React from "react";

function Assign() {
  const ongoingAssignments = [
    { title: "JavaScript Basics", type: "Assessment", date: "2024-11-01" },
    { title: "React Fundamentals", type: "Slip Test", date: "2024-11-05" },
    { title: "Data Structures", type: "Assessment", date: "2024-11-10" },
    { title: "Algorithms", type: "Slip Test", date: "2024-11-15" },
  ];

  const completedAssignments = [
    { title: "HTML & CSS", type: "Assessment", date: "2024-10-01" },
    { title: "Node.js Basics", type: "Slip Test", date: "2024-10-05" },
    { title: "Database Fundamentals", type: "Assessment", date: "2024-10-10" },
    { title: "Express.js", type: "Slip Test", date: "2024-10-12" },
    { title: "React Basics", type: "Assessment", date: "2024-10-15" },
    { title: "Python Basics", type: "Slip Test", date: "2024-10-20" },
    { title: "Java Programming", type: "Assessment", date: "2024-10-25" },
    { title: "Advanced JavaScript", type: "Slip Test", date: "2024-10-28" },
    { title: "Web Security", type: "Assessment", date: "2024-10-29" },
    { title: "Software Testing", type: "Slip Test", date: "2024-10-30" },
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
    },
    subheading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#444",
    },
    list: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "30px",
    },
    listItem: {
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "background-color 0.3s",
    },
    listItemHover: {
      backgroundColor: "#f1f1f1",
    },
    itemText: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    itemTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333",
    },
    itemDate: {
      fontSize: "14px",
      color: "#666",
    },
    button: {
      padding: "8px 16px",
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Assignments & Assessments</h1>

      <div>
        <h2 style={styles.subheading}>Ongoing Assignments</h2>
        <div style={styles.list}>
          {ongoingAssignments.map((assignment, index) => (
            <div
              key={index}
              style={styles.listItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.listItemHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "transparent")
              }
            >
              <div style={styles.itemText}>
                <span style={styles.itemTitle}>
                  {assignment.title} ({assignment.type})
                </span>
                <span style={styles.itemDate}>Due Date: {assignment.date}</span>
              </div>
              <button
                style={styles.button}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.buttonHover.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    styles.button.backgroundColor)
                }
              >
                Start Assessment
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={styles.subheading}>Completed Assignments</h2>
        <div style={styles.list}>
          {completedAssignments.map((assignment, index) => (
            <div key={index} style={styles.listItem}>
              <div style={styles.itemText}>
                <span style={styles.itemTitle}>
                  {assignment.title} ({assignment.type})
                </span>
                <span style={styles.itemDate}>
                  Completed on: {assignment.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assign;
